import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

const MoviesSlice = createSlice({
  name: "MoviesApp",
  initialState,
  reducers: {
    
  },
});

export const { addMovie, removeMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
