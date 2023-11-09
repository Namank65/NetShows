import React from 'react';
import GptBar from './GptBar';
import GptSearchSugg from './GptSearchSugg';
import { LogInBgImg } from '../Utils/Constants';

const GptContainer = () => {
  return (
    <div >

      <div className='absolute -z-10'>
        <img alt='bg img' className='w-screen h-screen' src={LogInBgImg}/>
      </div>

        <GptBar/>
        <GptSearchSugg/>
    </div>
  )
};

export default GptContainer;