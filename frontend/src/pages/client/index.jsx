import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";

const Client = () => {
  const [clients, getClients] = useState([]);

  useEffect(() => {
    axios
      .get("/api/clients")
      .then((response) => {
        getClients(response.data["hydra:member"]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Hello client !</h1>
      {/* Objectif: récupérer les clients en base de données
        1 - Récupérer la table client
        2 - Effectuer une requête get sur /api/clients
        3 - Stocker les clients dans une variable
        4 - Itération de chaque client sur la vue
      */}
      {clients.map((client) => {
        return (
          <>
            <ul>
              <li>Email des clients : {client.email}</li>
            </ul>
          </>
        )
      })}
    </>
  );
};

export default Client;
