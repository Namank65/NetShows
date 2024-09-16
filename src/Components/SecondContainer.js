import React, { useState } from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondContainer = () => {
  const movies = useSelector(store => store.movies);

const [addNowPlayingMovies, setaddNowPlayingMovies] = useState([])
const [addTopRatedMovies, setaddTopRatedMovies] = useState([])
const [addUpcomingMovies, setaddUpcomingMovies] = useState([])
const [addPopularMovies, setaddPopularMovies] = useState([])

  const func = async() => {
    const data = await Promise.all([movies])
    setaddNowPlayingMovies(data[0]?.addNowPlayingMovies)
    setaddPopularMovies(data[0]?.addPopularMovies)
    setaddTopRatedMovies(data[0]?.addTopRatedMovies)
    setaddUpcomingMovies(data[0]?.addUpcomingMovies)

  }
  func() 
  
  return (
    movies.addNowPlayingMovies &&
    <div className='bg-black'>
      <div className='md:-mt-52 md:pl-9 relative'>
      <MovieList title={"Top Searches"} movies={addNowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={addTopRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={addUpcomingMovies}/>
      <MovieList title={"Popular Movies"} movies={addPopularMovies}/>
      </div>
    </div>
  )
};

export default SecondContainer;