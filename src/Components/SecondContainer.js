import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondContainer = () => {

  const movies = useSelector(store => store.movies);
  
  return (
    movies.addNowPlayingMovies &&
    <div className='bg-black'>
      <div className='md:-mt-52 md:pl-9 relative'>
      <MovieList title={"Top Searches"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.addTopRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.addUpcomingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.addPopularMovies}/>
      </div>
    </div>
  )
};

export default SecondContainer;