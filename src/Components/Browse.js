import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import useTopRatedMovies from '../Hooks/UseTopRatedMovies';
import usePopularMovies from '../Hooks/UsePopularMovies';
import GptContainer from './GptContainer';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGptSearch = useSelector(store => store.Gpt.showGptSearch);

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptContainer />) :
          (<>
            <MainContainer />
            <SecondContainer />
          </>)
      }
    </div>
  )
};

export default Browse;