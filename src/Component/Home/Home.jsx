import React from "react";
import Slider from "./Slider";
import ProductionHouse from "../ProductionHouse/ProductionHouse";
import GenreMovieList from "../GenreMovieList";





const Home = () => {
  return (
    <div>
      <Slider />
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Disney Plus Clone</h1>
        <p className="text-lg text-gray-400 mt-4">
          Enjoy your favorite movies and shows.
        </p>
      </div>
      <ProductionHouse />
     
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Explore More</h2>
        <p className="text-lg text-gray-400 mt-4">
          Discover a world of entertainment.
        </p>
        </div>
        <GenreMovieList />
      
    </div>
  );
};

export default Home;
