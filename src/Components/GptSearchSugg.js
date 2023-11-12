import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptSearchSugg = () => {
  const {MovieNames, MovieResults} = useSelector(store => store.Gpt);
  
  return (
    <div className='m-4 p-4 bg-black text-white'><MovieList title={MovieNames[0]} movies={MovieResults[0]}/></div>
  )
};

export default GptSearchSugg;