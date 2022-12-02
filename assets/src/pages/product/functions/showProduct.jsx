import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  URL_PRODUCT,
  URL_PRODUCT_ALL,
  URL_PRODUCT_EDIT,
} from "../../../middleware/environment";

const ShowProduct = () => {
  const [product, setProduct] = useState({
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
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const deleteProduct = (id) => {
    Swal.fire({
      title: "Etes-vous sur?",
      text: "Vous ne pourrez revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${URL_PRODUCT}/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Projet supprimé !",
              showConfirmButton: false,
              timer: 1500,
            });
            // DO LOCATION AFTER SUBMIT
            window.location.assign("/products");
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
              icon: "error",
              title: "Erreur",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

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
        <button onClick={() => deleteProduct(product.id)}>Supprimer</button>
      </div>
    </div>
  );
};

export default ShowProduct;
