import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondContainer = () => {

  const movies = useSelector(store => store.movies);
  
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Horror Movies"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Drama Movies"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Anime Movies"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Adult Movies"} movies={movies.addNowPlayingMovies}/>
    </div>
  )
}

export default SecondContainer;