import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  if (!movies) return;


  const random = Math.floor(Math.random() * 10);
  const MainMovies = movies[random];
  const { original_title, overview, id, release_date } = MainMovies;

  return (
    <div>
      <VideoTitle
        title={original_title}
        trailerId={id}
        releaseDate={release_date}
        overview={overview}
      />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
