import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import useTopRatedMovies from '../Hooks/UseTopRatedMovies';
import usePopularMovies from '../Hooks/UsePopularMovies';


const Browse = () => {

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondContainer/>
    </div>
  )
};

export default Browse;