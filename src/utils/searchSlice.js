// for caching search suggestions results

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSearchSuggestons: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheSearchSuggestons } = searchSlice.actions;
export default searchSlice.reducer;
