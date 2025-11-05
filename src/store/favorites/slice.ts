import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Parking[] = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Parking>) => {
      if (state.some((f) => f.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];
    },
    remove: (state, action) => {
      // TODO: Remove methode implementeren
      return [];
    },
  },
});

const { reducer, actions } = favoritesSlice;
export const { add, remove } = actions;
export default reducer;
