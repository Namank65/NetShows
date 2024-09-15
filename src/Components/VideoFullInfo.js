import React from 'react'
// import VideoBackGround from './VideoBackGround'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/UseMovieTrailer';
import { useSearchParams } from 'react-router-dom';

const VideoFullInfo = () => {
  const [searchParems] = useSearchParams();
  console.log(searchParems.get('v'))

  const trailerVideo = useSelector(store => store.movies?.addTrailer);
  console.log(trailerVideo);
  useMovieTrailer(searchParems.get('v'));

  return (
    <div className='w-full md:pt-0 pt-36 bg-black'>
      <iframe className='w-full md:h-screen aspect-video' src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1?&controls=0&showinfo=0&rel=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
    </div>
  )
}

export default VideoFullInfo
