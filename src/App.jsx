import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {

  const [movie,setMovie]=useState()
  return (
    <>
      Hello
      <Navbar />
      <input value={movie} onChange={(e)=>setMovie(e.terget.value)}></input>
    </>
  );
}

export default App;
