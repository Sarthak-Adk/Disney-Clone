import React from 'react';
import GenresLists from '../Constant/GenresLists';
import MovieList from './MovieList';

function GenreMovieList() {
  return (
    <div>
      {GenresLists.genere.slice(0, 5).map((item, index) => (
        <div key={item.id} className="p-8 px-8 md:px-16">
          <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
          <MovieList genreId={item.id} index_={index} />
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
