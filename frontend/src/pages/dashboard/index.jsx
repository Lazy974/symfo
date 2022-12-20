import React, { useEffect } from "react";
import Navbar from "../../components/navbar";

const DashBoard = () => {
  console.log(window.user.image_name);
  return (
    <>
      <Navbar />
      <img src={`/images/users/${window.user.image_name}`} alt="" />
      <h1>Hello {window.user.alias}, bienvenue sur votre profil :)</h1>
      <div className="w-full flex flex-col items-center my-10">
        <p>Votre email : {window.user.email}</p>
        <p>Votre rôle : {window.user.roles[0]}</p>
      </div>
    </>
  );
};

export default DashBoard;
