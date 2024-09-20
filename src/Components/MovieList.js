import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies}) => {

  return (
    <div className="px-6 text-white overflow-x-scroll no-scrollbar">
      <h1 className="text-3xl py-6">{title}</h1>
      <div className="flex md:overflow-x-scroll md:scroc">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
