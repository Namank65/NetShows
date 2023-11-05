import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { addTrailer } from "../Utils/MoviesSlice";
import { useDispatch } from "react-redux";


const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        const filteredData = json.results.filter(videos => videos.type === "Trailer")

        const Trailer = filteredData.length ? filteredData[0] : json.results[0];
        console.log(Trailer);
        dispatch(addTrailer(Trailer));

    }

    useEffect(() => {
        getMovieVideos();
    }, [])
}

export default useMovieTrailer;