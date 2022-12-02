import React from "react";
import { Link } from "react-router-dom";
import { URL_PRODUCT_ALL, URL_CLIENT_ALL } from "../middleware/environment";

const Navbar = () => {
  return (
    <nav>
      <ul>
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
          <a href={"/admin"}>Admin</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
