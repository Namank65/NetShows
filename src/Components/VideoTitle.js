import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-full aspect-video md:pt-[11%] pt-[62%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold md:text-3xl py-6 '>{title}</h1>
        <p className='py-5 w-1/4 md:block hidden '>{overview}</p>

        <div className='py-3 pr-1'>
            <button className='md:w-32 bg-white md:p-3 px-3 py-1  md:m-2 font-bold text-black rounded-lg hover:bg-opacity-80'>▶Play</button>
            <button className='w-40 hidden md:inline-block  bg-slate-500 text-white p-3  m-2 font-bold rounded-lg bg-opacity-50 hover:bg-opacity-70'>More Info</button>
        </div>

    </div>
  )
};

export default VideoTitle;