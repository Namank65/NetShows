import React from 'react'
import { POSTER_CDN } from '../Utils/Constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-6'>
      <img className='rounded-lg' alt='poster' src={POSTER_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard;