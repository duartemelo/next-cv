import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SliceState {
  section: string;
}

const initialState: SliceState = {
  section: "profile",
};

export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.section = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = scrollSlice.actions;

export default scrollSlice.reducer;
