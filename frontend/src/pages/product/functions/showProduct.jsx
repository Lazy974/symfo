import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import DeleteProduct from "./deleteProduct";
import {
  URL_PRODUCT,
  URL_PRODUCT_ALL,
  URL_PRODUCT_EDIT,
} from "../../../middleware/environment";

const ShowProduct = () => {
  const [product, getProduct] = useState({
    // Returns an object of key/value pairs of the dynamic params
    // from the current URL that were matched by the route path.
    id: useParams().id,
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get(`${URL_PRODUCT}/${product.id}`)
      .then(function (response) {
        getProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Projet {product.name}</h2>
      <div>
        <div>
          <Link to={`${URL_PRODUCT_ALL}`}>Voir tous les projets</Link>
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
          <Link to={`${URL_PRODUCT_EDIT}/${product.id}`}>Editer</Link>
        </button>
        <button onClick={() => DeleteProduct(product.id)}>Supprimer</button>
      </div>
    </div>
  );
};

export default ShowProduct;
