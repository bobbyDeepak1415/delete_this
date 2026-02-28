import { configureStore } from "@reduxjs/toolkit";

import MoviesReducer from './MoviesSlice'

const store=configureStore({
  reducer:{
    moviesApp:MoviesReducer
  }
})


export default store