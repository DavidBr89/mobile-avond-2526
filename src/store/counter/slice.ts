import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state + 1;
    },
    decrement: (state, action) => {
      return state - 1;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      return state + action.payload;
    },
  },
});

const { actions, reducer } = counterSlice;
export default reducer;
export const { increment, incrementBy, decrement } = actions;
