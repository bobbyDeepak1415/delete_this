import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value += 1;
    },
    addAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export {increment,decrement,addAmount}=CounterSlice.actions



export default CounterSlice.reducer