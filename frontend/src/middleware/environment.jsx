import { Cookies } from "react-cookie";

// TOKEN
export const token = new Cookies();
export const CHECK_TOKEN = "https://localhost:8000/api/login_check";

// USERS URL
export const URL_USERS = "https://localhost:8000/api/users";
// CLIENT URL
export const URL_CLIENT = "https://localhost:8000/api/clients";
export const URL_CLIENT_ALL = "/clients";
export const URL_CLIENT_CREATE = "/products/create";
export const URL_CLIENT_SHOW = "/products/show";
export const URL_CLIENT_EDIT = "/products/edit";

// PRODUCT URL
export const URL_PRODUCT = "https://localhost:8000/api/products";
export const URL_PRODUCT_ALL = "/products";
export const URL_PRODUCT_CREATE = "/products/create";
export const URL_PRODUCT_SHOW = "/products/show";
export const URL_PRODUCT_EDIT = "/products/edit";
