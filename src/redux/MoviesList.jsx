import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "./MoviesSlice";

const MoviesList = () => {
  const movies = useSelector((state) => state.moviesApp.value);

  const dispatch = useDispatch();

  return (
    <div>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            {movie.name}
            <button onClick={() => dispatch(removeMovie(movie.id))}>
              remove
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default MoviesList;
