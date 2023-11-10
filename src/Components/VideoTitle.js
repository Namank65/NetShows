import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[11%] px-12 absolute text-white bg-gradient-to-r from-black '>
        <h1 className='font-bold text-3xl py-5 '>{title}</h1>
        <p className='py-5 w-1/4 '>{overview}</p>

        <div className='py-3 pr-1'>
            <button className='w-32 bg-white p-3 m-2 font-bold text-black rounded-lg hover:bg-opacity-80'>▶Play</button>
            <button className='w-40 bg-slate-500 text-white p-3  m-2 font-bold rounded-lg bg-opacity-50 hover:bg-opacity-70'>More Info</button>
        </div>

    </div>
  )
};

export default VideoTitle;