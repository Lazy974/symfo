import React from "react";
import Navbar from "../../components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1>Page d&apos;accueil</h1>
      <h1 className="text-3xl font-bold underline bg-slate-500">
        Hello world!
      </h1>
      <p className="text-green-900">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam non
        cupiditate ut aperiam voluptatem dolores dignissimos iste quaerat sequi
        corporis aut, placeat, expedita adipisci. Natus debitis tempora eius
        facere at?
      </p>
    </>
  );
};

export default Home;
