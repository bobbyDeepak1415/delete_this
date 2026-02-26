import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { useDispatch } from "redux";

import {addMovie} from '.'


function App() {
  const [movie, setMovie] = useState();

  const dispatch=useDispatch()

  const handleAddMovie=()=>{
    if(!movie.trim()) return

    dispatch(addMovie())





  }

  return (
    <>
      Hello
      {/* <Navbar /> */}
      <input value={movie} onChange={(e) => setMovie(e.target.value)}></input>
      <button onClick={handleAddMovie}>Add</button>
    </>
  );
}

export default App;
