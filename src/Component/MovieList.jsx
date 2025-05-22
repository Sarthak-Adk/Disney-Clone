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
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slide('left')}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
          isHrCard ? 'mt-[80px]' : 'mt-[150px]'
        }`}
        title="Scroll Left"
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4"
      >
        {movieList.map((movie) => {
          const CardComponent = isHrCard ? HrMovieCard : MovieCard;
          return <CardComponent key={movie.id} movie={movie} />;
        })}
      </div>

      <IoChevronForwardOutline
        onClick={() => slide('right')}
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 absolute right-0 ${
          isHrCard ? 'mt-[80px]' : 'mt-[150px]'
        }`}
        title="Scroll Right"
      />
    </div>
  );
}

export default MovieList;
