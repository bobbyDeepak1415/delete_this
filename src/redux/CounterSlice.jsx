import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value:[
//     {id:0,name:"Starwars"},
//     {id:1,name:"Startrek"},
//   ]
// };

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value <= 0) return;
      state.value -= 1;
    },
    addAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, addAmount } = CounterSlice.actions;

export default CounterSlice.reducer;
