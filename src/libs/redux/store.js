import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/count/countSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})