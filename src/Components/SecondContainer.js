import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondContainer = () => {

  const movies = useSelector(store => store.movies);
  
  return (
    movies.addNowPlayingMovies &&
    <div className='bg-black'>
      <div className='-mt-52 pl-9 relative'>
      <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.addTopRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.addPopularMovies}/>
      <MovieList title={"Anime Movies"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Adult Movies"} movies={movies.addNowPlayingMovies}/>
      </div>
    </div>
  )
};

export default SecondContainer;