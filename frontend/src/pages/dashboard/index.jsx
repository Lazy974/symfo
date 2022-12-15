import React from "react";
import Navbar from "../../components/navbar";

const DashBoard = () => {
  return (
    <>
      <Navbar />
      <h1>{window.user.email}</h1>
    </>
  );
};

export default DashBoard;
