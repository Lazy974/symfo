import React from "react";
import User from "./user";
import Admin from "./admin";
import Anonymous from "./anonymous";

const Navbar = () => {
  if (window.user === null) {
    return <Anonymous />;
  } else if (window.user.roles[0] === "ROLE_USER") {
    return <User />;
  } else if (window.user.roles[0] === "ROLE_ADMIN") {
    return <Admin />;
  }
};

export default Navbar;
