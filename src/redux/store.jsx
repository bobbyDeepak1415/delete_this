import { configureStore } from "@reduxjs/toolkit";

import MoviesReducer from './MoviesSlice'

const store=configureStore({
  reducer:{
    mmoviesApp:MoviesReducer
  }
})


export default store