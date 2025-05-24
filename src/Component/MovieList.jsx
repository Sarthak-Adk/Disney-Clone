import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({ genreId, index_: listIndex }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resp = await GlobalApi.getMovieByGenreId(genreId);
        setMovieList(resp.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [genreId]);

  const slide = (direction) => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += direction === 'right' ? 500 : -500;
    }
  };

  const isHrCard = listIndex % 3 === 0;

  return (
    <div className="relative w-full">
      {/* Left Scroll Button */}
      <IoChevronBackOutline
        onClick={() => slide('left')}
        className={`text-[50px] text-white p-2 z-20 cursor-pointer hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full`}
        title="Scroll Left"
      />

      {/* Scrollable Movie List */}
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth px-10 pb-4"
      >
        {movieList.map((movie) => {
          const CardComponent = isHrCard ? HrMovieCard : MovieCard;
          return <CardComponent key={movie.id} movie={movie} />;
        })}
      </div>

      {/* Right Scroll Button */}
      <IoChevronForwardOutline
        onClick={() => slide('right')}
        className={`text-[50px] text-white p-2 z-20 cursor-pointer hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full`}
        title="Scroll Right"
      />
    </div>
  );
}

export default MovieList;
