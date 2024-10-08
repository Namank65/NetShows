import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { addVideoInfoDisplay } from "../Utils/MoviesSlice";
import { useDispatch } from "react-redux";

const UseVideoInfoDisplay = (movieId) => {
  const dispatch = useDispatch();

  const getVideoInfo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filteredData = json.results.filter(
      (videos) => videos.type === "Trailer"
    );

    const Trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addVideoInfoDisplay(Trailer));
  };

  useEffect(() => {
    getVideoInfo();
  }, [movieId]);
};

export default UseVideoInfoDisplay;
