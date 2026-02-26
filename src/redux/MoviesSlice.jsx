import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const MoviesSlice = createSlice({
  name: "MoviesApp",
  initialState,
  reducers: {
    addMovie: () => {},
    removeMovie: () => {},
  },
});

export const { addMovie, removeMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
