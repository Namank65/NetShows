import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";

const useNowPlayingMovies = () => {
    const NowPlayingMovies = useSelector(store => store.movies.addNowPlayingMovies);
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect(() => {
      !NowPlayingMovies && getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;