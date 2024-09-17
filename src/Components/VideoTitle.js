import React from 'react'
import { Link } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";


const VideoTitle = ({title, overview, trailerId, releaseDate}) => {

  const [releasing, setRealising] = React.useState(false);

  return (
    <div className=' w-full h-full aspect-video md:pt-[15%] pt-[48%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <div >
        <h1 className='font-bold md:text-3xl py-6 '>{title}</h1>
        <p className='py-5 w-[50%] md:block hidden '>{overview}</p>
        </div>

        <div className='py-3 pr-1 flex items-center'>
            <Link to={`/videoInfo?v=${trailerId}`}><button className='md:w-32 bg-white md:p-3 px-3 py-1 md:m-2 font-bold text-black rounded-lg hover:bg-opacity-80 flex justify-center items-center gap-2'><FaPlay/>Play</button></Link>
            <div className='flex items-center'>
            <button onClick={() => setRealising(!releasing)} className='w-40 hidden  bg-slate-500 text-white p-3 m-2 font-bold rounded-lg bg-opacity-50 hover:bg-opacity-70 md:!flex justify-center items-center gap-2 '><IoIosInformationCircleOutline className='text-xl'/>More Info</button>
        {releasing && <p className='py-1 w-80 md:block hidden '>In Cinemas on - {releaseDate}</p>}
            </div>
        </div>

    </div>
  )
};

export default VideoTitle;