import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "./MoviesSlice";

const MvovieInput = () => {
  const [movie, setMovie] = useState("");

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (!movie.trim()) return;
    dispatch(addMovie(movie));
  };

  return (
    <div>
      <input value={movie} onChange={(e) => setMovie(e.target.value)}></input>
      <button onClick={handleAddMovie}>Add</button>
    </div>
  );
};

export default MvovieInput;
