import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const fetchUserListThunk = createAsyncThunk(
  'user/fetchUserListThunk',
  async (_, thunkApi) => {
    const USER_URL = process.env.REACT_APP_USER_API_URL;
    try {
      const result = await fetch(USER_URL).then((res) => res.json());
      return result;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
)


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserList: (state, action) => {
      const userList = action.payload;
      state.data = userList;
    },
    createUser: (state, action) => {
      const newUser = action.payload;
      state.data.push(newUser);
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const findUserIndex = state.data.findIndex(
        ({ id }) => id === updatedUser?.id
      );
      if (findUserIndex >= 0) {
        state.data[findUserIndex] = updatedUser;
      }
    },
    removeUser: (state, action) => {
      const deletedUser = action.payload;
      const findUserIndex = state.data.findIndex(
        ({ id }) => id === deletedUser?.id
      );
      if (findUserIndex >= 0) {
        state.data.splice(findUserIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase( fetchUserListThunk.fulfilled, (state, action) => {
      const userList = action.payload;
      state.data = userList;
    })
  }
});

const userReducer = userSlice.reducer;

export const { fetchUserList, updateUser, createUser, removeUser } =
  userSlice.actions;

export default userReducer;
