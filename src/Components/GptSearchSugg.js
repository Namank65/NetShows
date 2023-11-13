import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptSearchSugg = () => {
  const { MovieNames, MovieResults } = useSelector(store => store.Gpt);

  if(!MovieNames) return null;

  return (
    <div className='m-4 p-4 bg-black text-white bg-opacity-80 rounded-lg'>
      <div>
        {MovieNames.map((movieNames, index) => <MovieList key={movieNames} title={movieNames} movies={MovieResults[index]}/>)}
      </div>
    </div>
  )
};

export default GptSearchSugg;