import React from "react";
import { Link } from "react-router-dom";

const Anonymous = () => {
  return (
    <nav className="bg-blue-500 text-black uppercase p-4">
      <ul className="flex flex-row justify-around">
        <Link to={`/`}>Accueil</Link>
        <li>
          <Link to={`${process.env.URL_PRODUCT_ALL}`}>Nos produits</Link>
        </li>
        <li>
          <Link to={`${process.env.URL_CLIENT_ALL}`}>Nos clients</Link>
        </li>
        <li>
          <a href={"/register"}>Inscription</a>
        </li>
        <li>
          <a href={"/login"}>Connexion</a>
        </li>
      </ul>
    </nav>
  );
};

export default Anonymous;
