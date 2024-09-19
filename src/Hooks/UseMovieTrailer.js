import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { addTrailer } from "../Utils/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";


const useMovieTrailer = (movieId) => {
    const MovieTrailer = useSelector(store => store.movies.addTrailer);
    const dispatch = useDispatch();
    
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        
        const filteredData = json.results.filter(videos => videos.type === "Trailer")
        
        const Trailer = filteredData.length ? filteredData[0] : json.results[0];
        // console.log(addTrailer());
        dispatch(addTrailer(Trailer));
        
    }
    
    useEffect(() => {
     getMovieVideos();
    }, [])
}

export default useMovieTrailer;