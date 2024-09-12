import React from "react";
import { POSTER_CDN } from "../Utils/Constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieCard = ({ posterPath }) => {
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  console.log(movies);
  if (!posterPath) return null;

  return (
    <>
      {movies.map((each) => (
        <Link to={`/videoInfo?v=${each.id}`}>
          <div className="md:w-48 w-36 pr-6 hover:scale-95 duration-300 ease-in-out">
            <img
              className="rounded-lg"
              alt="poster"
              src={POSTER_CDN + each.poster_path}
            />
          </div>
        </Link>
      ))}
    </>
  );
};

export default MovieCard;
