import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import process from "process"

const LogOut = () => {
  axios
    .get(`${process.env.LOGOUT}`)
    .then(() => {
      Swal.fire({
        icon: "warning",
        title: "Déconnexion",
        text: "Vous déconnecter ?",
        showCancelButton: true,
        showConfirmButton: true,
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: "success",
              text: "Vous êtes bien déconnecté !",
              timer: 2500,
            });

            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

export default LogOut;
