import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { URL_USERS } from "../../../middleware/environment";
import { token } from "../../../middleware/environment";

const Users = () => {
  const [users, getUsers] = useState([]);

  const headers = {
    Authorization: `bearer ${token.get("access_token")}`,
  };

  useEffect(() => {
    axios
      .get(`${URL_USERS}`, {
        headers: headers,
      })
      .then((response) => {
        getUsers(response.data["hydra:member"]);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Rôles</th>
            <th>Méthodes</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => {
            return (
              <tr key={key}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.roles}</td>
                <td>
                  <Link to={``}>Editer</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
