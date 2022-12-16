import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import DeleteProduct from "./deleteProduct";
import { AuthToken } from "../../../middleware/token/authToken";

const ShowProduct = () => {
  const [product, getProduct] = useState({
    // Returns an object of key/value pairs of the dynamic params
    // from the current URL that were matched by the route path.
    id: useParams().id,
    name: "",
    description: "",
    price: "",
  });

  const headers = {
    Authorization: `bearer ${AuthToken.get("access_token")}`,
  };

  useEffect(() => {
    axios
      .get(`${process.env.URL_PRODUCT}/${product.id}`, { headers: headers })
      .then((response) => {
        getProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Projet {product.name}</h2>
      <div>
        <div>
          <Link to={`${process.env.URL_PRODUCT_ALL}`}>Voir tous les projets</Link>
        </div>
        <div>
          <b>Nom :</b>
          <p>{product.name}</p>
          <b>Description :</b>
          <p>{product.description}</p>
          <b>Prix :</b>
          <p>{product.price}€</p>
        </div>
        <button>
          <Link to={`${process.env.URL_PRODUCT_EDIT}/${product.id}`}>Editer</Link>
        </button>
        <button onClick={() => DeleteProduct(product.id)}>Supprimer</button>
      </div>
    </div>
  );
};

export default ShowProduct;
