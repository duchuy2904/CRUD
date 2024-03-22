import React from "react";
import { Link } from "react-router-dom";
import "../styles/button.css";

export default function UserItem(props) {
  const { data, openModal, openDelete } = props;
  const { id, fullname, username, email, birthDate, gender, favorite } = data;

  return (
    <tr>
      <td>
        <Link to={`/user-list/${id}?gender=${gender}`}>{id}</Link>
      </td>
      <td>{fullname}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{birthDate}</td>
      <td>{gender}</td>
      <td>{favorite}</td>
      <td>
        <div>
          <button class="glow-on-hover" type="button" onClick={openModal}>
            Edit
          </button>
          {"|"}
          <button class="glow-on-hover" type="button" onClick={openDelete}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
