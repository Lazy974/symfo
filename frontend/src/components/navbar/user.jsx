import React from "react";
import { Link } from "react-router-dom";
import { URL_PRODUCT_ALL, URL_CLIENT_ALL } from "../../middleware/environment";

const User = () => {
  return (
    <nav className="bg-blue-500 text-black uppercase p-4">
      <ul className="flex flex-row justify-around">
        <Link to={`/`}>Accueil</Link>
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
          <a href={"/logout"}>Déconnexion</a>
        </li>
      </ul>
    </nav>
  );
};

export default User;
