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
      if (state.value <= 0) return;
      state.value -= 1;
    },
    addAmount: (state, action) => {
      state.value += action.payload;
    },...
  },
});

export const { increment, decrement, addAmount } = CounterSlice.actions;

export default CounterSlice.reducer;
