import React from "react";
import { Link } from "react-router-dom";
import { URL_PRODUCT_ALL, URL_CLIENT_ALL } from "../middleware/environment";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [users, getUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        getUsers(response.data["hydra:member"]);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <nav className="bg-blue-500 text-black uppercase p-4">
      <ul className="flex flex-row justify-around">
        <li>
          <Link to={`/`}>Accueil</Link>
        </li>
        <li>
          <Link to={`${URL_PRODUCT_ALL}`}>Nos produits</Link>
        </li>
        <li>
          <Link to={`${URL_CLIENT_ALL}`}>Nos clients</Link>
        </li>
        <li>
          <a href={"/dashboard"}>Dashboard</a>
        </li>
        <li>
          <a href={"/admin"}>Admin</a>
        </li>
        <li>
          <Link to={`/users`}>Users</Link>
        </li>
        <li>
          <a href={"/register"}>Inscription</a>
        </li>
        <li>
          <a href={"/login"}>Connexion</a>
        </li>
        <li>
          <a href={"/logout"}>Déconnexion</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
