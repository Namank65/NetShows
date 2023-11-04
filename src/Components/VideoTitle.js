import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-44 px-12 w-2/4'>
        <h1 className='font-bold text-3xl p-5'>{title}</h1>
        <p className='p-5'>{overview}</p>

        <div className='px-3'>
            <button className='w-20 bg-slate-400 p-2 m-2 font-bold rounded-lg'>▶Play</button>
            <button className='w-28 bg-slate-400 p-2 m-2 font-bold rounded-lg'>More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle;