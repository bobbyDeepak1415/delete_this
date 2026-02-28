import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "./redux/MoviesSlice";

function App() {
  const [movie, setMovie] = useState();

  const movies = useSelector((state) => state.moviesApp.value);

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (!movie.trim()) return;

    dispatch(addMovie(movie));
    setMovie("");
  };

  return (
    <>
      Hello
      {/* <Navbar /> */}
      <input value={movie} onChange={(e) => setMovie(e.target.value)}></input>
      <button onClick={handleAddMovie}>Add</button>
      {movies.map((movie) => {
        return <li key={movie.id}>{movie.name}</li>;
      })}
    </>
  );
}

export default App;
