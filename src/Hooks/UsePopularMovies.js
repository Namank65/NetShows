import { useDispatch, useSelector } from "react-redux";
import {addPopularMovies} from "../Utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";

const usePopularMovies = () => {
    const PopularMovies = useSelector(store => store.movies.addPopularMovies);
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=2', API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
  
    useEffect(() => {
        !PopularMovies && getPopularMovies();
    }, [])
}

export default usePopularMovies;