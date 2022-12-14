import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {
  URL_PRODUCT,
  URL_PRODUCT_CREATE,
  URL_PRODUCT_SHOW,
  URL_PRODUCT_EDIT,
} from "../../../middleware/environment";
import DeleteProduct from "./deleteProduct";

const GetAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzEwMzkxOTQsImV4cCI6MTY3MTA0Mjc5NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdEB0ZXN0LmZyIn0.KgiTFlx5hHiBS1jtbGkqGjft5EHlFO0ueTYQEei95tPw7xRhfI67IpP-CcqoiqRWQeYztOL9K9I0GNxYjoMaIYsTHBSFebyXWgW_v2143FJvtLhbY9cRCKF7SQD6Qxyjwl7gvSiFoVU86zu5-_nqMjrvJsQDGNLg_j93c3xg2K0USznIXKfOzvqx2X6edeH8IJehibvyp0goGOZJqvvWIjfsgNF66Jp7inV1KS7TNMx8NT9Kc_-D6vTrnBvr09lbwfCI3UjSCZEwdtxjslXXm4Q9bsbu2u52APbg8i-_dTGGXWw0x_jR65FbNDek8pYQXsTrtfE-rrJcB9Zqb7YJ1Q";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios
      .get(`${URL_PRODUCT}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        setAllProducts(response.data["hydra:member"]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const isAdmin = false;

  return (
    <>
      <h1 className="text-red-500">Liste des produits</h1>
      <div>
        <div>
          <div>
            <Link to={`${URL_PRODUCT_CREATE}`}>Créer un nouveau projet</Link>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Description</th>
                  <th>Prix</th>
                  <th>Méthodes</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((product, key) => {
                  return (
                    <tr key={key}>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.price}€</td>
                      <td>
                        <Link
                          className="text-blue-500"
                          to={`${URL_PRODUCT_SHOW}/${product.id}`}
                        >
                          Afficher
                        </Link>
                        {isAdmin === true ? (
                          <>
                            <Link
                              className="text-green-500"
                              to={`${URL_PRODUCT_EDIT}/${product.id}`}
                            >
                              Editer
                            </Link>
                            <button
                              className="text-red-500"
                              onClick={() => DeleteProduct(product.id)}
                            >
                              Supprimer
                            </button>
                          </>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAllProducts;
