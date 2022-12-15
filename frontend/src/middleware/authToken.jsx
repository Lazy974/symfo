import React from "react";
import { Cookies } from "react-cookie";

const AuthToken = (name) => {
    const cookie = new Cookies;
    cookie.get(name);
}

export default AuthToken;