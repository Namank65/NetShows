import { useDispatch, useSelector } from "react-redux";
import {addTopRatedMovies} from "../Utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";

const useTopRatedMovies = () => {
  const TopRatedMovies = useSelector(store => store.movies.addTopRatedMovies);
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=2', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    }
  
    useEffect(() => {
      !TopRatedMovies && getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;