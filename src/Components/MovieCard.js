import React from 'react'
import { POSTER_CDN } from '../Utils/Constants';

const MovieCard = ({posterPath}) => {

  if(!posterPath) return null;

  return (
    <div className='md:w-48 w-36 pr-6 hover:scale-95 duration-300 ease-in-out'>
      <img className='rounded-lg' alt='poster' src={POSTER_CDN + posterPath}/>
    </div>
  )
};

export default MovieCard;