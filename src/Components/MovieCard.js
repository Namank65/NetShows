import React from "react";
import { POSTER_CDN } from "../Utils/Constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieCard = ({ posterPath, movieId }) => {
  if (!posterPath) return null;

  return (
    <Link to={`/videoInfo?v=${movieId}`}>
      <div className="md:w-48 w-36 pr-6 hover:scale-95 duration-300 ease-in-out">
        <img
          className="rounded-lg"
          alt="poster"
          src={POSTER_CDN + posterPath}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
