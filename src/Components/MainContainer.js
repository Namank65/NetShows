import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.addNowPlayingMovies);

    if(!movies) return;

    const MainMovies = movies[0];
    // console.log(MainMovies);

    const {original_title, overview, id} = MainMovies;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround movieId={id}/>
    </div>
  )
};

export default MainContainer;