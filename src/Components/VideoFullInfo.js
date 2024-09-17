import React from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import UseVideoInfoDisplay from '../Hooks/UseVideoInfoDisplay';

const VideoFullInfo = () => {
  const [searchParems] = useSearchParams();
  const id = searchParems.get('v')
  console.log(id)

  const trailerVideo = useSelector(store => store.movies?.addVideoInfoDisplay);
  UseVideoInfoDisplay(id);
  
  return (
    <div className='w-full h-screen flex items-center md:pt-0 bg-black'>
      <iframe className='w-full md:h-screen aspect-video' src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1?&controls=1&showinfo=0&rel=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
    </div>
  )
}

export default VideoFullInfo
