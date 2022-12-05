import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL_CLIENT } from "../../middleware/environment";
import Navbar from "../../components/navbar";

const Client = () => {
  const ROLE_ADMIN = false;

  return (
    <>
      {ROLE_ADMIN === true ? (
        <>
          <Navbar />
          <h1>Hello client !</h1>
        </>
      ) : (
        <h1 className="text-red-500">Accès refusé</h1>
      )}
    </>
  );
};

export default Client;
