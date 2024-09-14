import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import useTopRatedMovies from '../Hooks/UseTopRatedMovies';
import usePopularMovies from '../Hooks/UsePopularMovies';
import GptContainer from './GptContainer';
import { useSelector } from 'react-redux';
import useUpcomingMovies from '../Hooks/UseUpcomingMovies';
import Footer from './Footer';


const Browse = () => {

  const showGptSearch = useSelector(store => store.Gpt.showGptSearch);

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies()

  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptContainer />) :
          (<>
            <MainContainer />
            <SecondContainer />
            <Footer/>
          </>)
      }
    </div>
  )
};

export default Browse;