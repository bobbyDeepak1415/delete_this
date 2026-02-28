import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  value: [
    { id: 0, name: "Starwars" },
    { id: 2, name: "Avatar" },
  ],
};

const MoviesSlice = createSlice({
  name: "MoviesApp",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: state.value.length ? state.value[state.value.length-1].id :0,
        name:action.payload 
      };

      state.value.push(newMovie)

    },
    removeMovie: (state, action) => {
      // state.value.splice(action.payload)
    },
  },
});

export const { addMovie, removeMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
