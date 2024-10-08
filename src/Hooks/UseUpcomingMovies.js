import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";

const useUpcomingMovies = () => {
    const UpcomingMovies = useSelector(store => store.movies.addUpcomingMovies);
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2', API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    }
  
    useEffect(() => {
      !UpcomingMovies && getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;