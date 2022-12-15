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
import { token } from "../../../middleware/environment";

const GetAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  const headers = {
    Authorization: `bearer ${token.get("access_token")}`,
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios
      .get(`${URL_PRODUCT}`, {headers: headers})
      .then((response) => {
        setAllProducts(response.data["hydra:member"]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
                        {window.user === null ||
                        window.user.roles[0] === "ROLE_USER" ? null : (
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
