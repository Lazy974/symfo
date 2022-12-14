import React from "react";
import { useEffect } from "react";
import Navbar from "../../components/navbar";

const Home = () => {
  useEffect(() => {
    console.log();
  }, [])
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
      <p className="text-violet-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus excepturi iure, recusandae nisi magni voluptates exercitationem ducimus explicabo perferendis id, similique deleniti vel veritatis dolorum nesciunt ipsam, hic alias ab.</p>
    </>
  );
};

export default Home;
