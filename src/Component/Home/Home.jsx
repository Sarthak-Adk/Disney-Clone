import React from "react";
import Slider from "./Slider";
import ProductionHouse from "../ProductionHouse/ProductionHouse";
const Home = () => {
  return (
    <>
      <Slider />
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Disney Plus Clone</h1>
        <p className="text-lg text-gray-400 mt-4">
          Enjoy your favorite movies and shows.
        </p>
      </div>
      <ProductionHouse />
    </>
  );
};

export default Home;
