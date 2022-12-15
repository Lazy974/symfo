import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
import { CHECK_TOKEN } from "../../middleware/environment";

const Home = () => {
  const [cookie, setCookie] = useCookies(["name"]);
  const data = {
    username: "test@test.fr",
    password: "testons",
  };

  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
    axios
      .post(`${CHECK_TOKEN}`, data, { headers: headers })
      .then((response) => {
        // localStorage.setItem("token", response.data.token);
        // const local = localStorage.getItem("token");
        // console.log(local);

        setCookie("access_token", response.data.token);
      });
  }, []);

  return (
    <CookiesProvider>
      <Navbar />
      <h1 className="text-3xl font-bold underline bg-slate-500">
        Hello world!
      </h1>
      <p className="text-green-900">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam non
        cupiditate ut aperiam voluptatem dolores dignissimos iste quaerat sequi
        corporis aut, placeat, expedita adipisci. Natus debitis tempora eius
        facere at?
      </p>
      <p className="text-violet-800">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
        excepturi iure, recusandae nisi magni voluptates exercitationem ducimus
        explicabo perferendis id, similique deleniti vel veritatis dolorum
        nesciunt ipsam, hic alias ab.
      </p>
    </CookiesProvider>
  );
};

export default Home;
