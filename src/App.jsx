import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [movie, setMovie] = useState();

  const handleAddMovie=()=>{
    if(!movie.trim()) return

    


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
