import React, { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constants';

const VideoBackGround = ({movieId}) => {
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/507089/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        
        const filteredData = json.results.filter(videos => videos.type === "Trailer") 
        
        const Trailer = filteredData.length ? filteredData[0] : json.results[0];
        console.log(Trailer)
        
    }

    useEffect(() => {
        getMovieVideos();
    },[])

  return (
    <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/X4d_v-HyR4o?si=XtI0B7UndfwKandv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackGround;