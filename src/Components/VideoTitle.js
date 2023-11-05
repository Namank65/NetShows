import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-60 px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-3xl p-5'>{title}</h1>
        <p className='p-5 w-1/4'>{overview}</p>

        <div className='px-3'>
            <button className='w-32 bg-white p-2 m-2 font-bold text-black rounded-lg hover:bg-slate-300'>▶Play</button>
            <button className='w-40 bg-slate-500 text-white p-2  m-2 font-bold rounded-lg bg-opacity-50 hover:bg-slate-600'>More Info</button>
        </div>

    </div>
  )
};

export default VideoTitle;