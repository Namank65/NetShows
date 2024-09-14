import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.addNowPlayingMovies);
    // const upmovies = useSelector(store => store.movies?.addUpcomingMovies);
    console.log(movies);

    if(!movies) return;

    const MainMovies = movies[0];

    const {original_title, overview, id, release_date
    } = MainMovies;
  return (
    <div>
        <VideoTitle title={original_title} trailerId={id} releaseDate={release_date}
 overview={overview}/>
        <VideoBackGround movieId={id}/>
    </div>
  )
};

export default MainContainer;