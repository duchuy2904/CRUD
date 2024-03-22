import axios from "axios";
import React, { useState } from "react";
import "../styles/delete.css";
import { removeUser } from "../libs/redux/features/user/userSlice";
import { useDispatch } from "react-redux";


const ConfirmDelete = (props) => {
  const { data, closeModal } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    const USER_URL = process.env.REACT_APP_USER_API_URL;
    axios
      .delete(USER_URL + "/" + data.id)
      .then(({ data }) => {
        dispatch(removeUser(data));
        closeModal();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={`root ${loading ? 'loading' : ''}`}>
      <p>Are you sure to delete user: {data.email}?</p>
      <div className={'formActions'}>
      <button type="button" onClick={handleDelete} disabled={loading}>OK</button>
      <button type="button" onClick={closeModal} disabled={loading}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
