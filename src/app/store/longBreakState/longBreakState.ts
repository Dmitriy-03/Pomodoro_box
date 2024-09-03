import { createSlice } from "@reduxjs/toolkit";

interface ILongBreakState {
  tomatoForLongBreak: number;
}

const initialState: ILongBreakState = {
  tomatoForLongBreak: 0,
};

const longBreakStateSlice = createSlice({
  name: "longBreakState",
  initialState,
  reducers: {
    addTomatoForLongBreak: {
      reducer(state) {
        state.tomatoForLongBreak = state.tomatoForLongBreak + 1;
      },
      prepare() {
        return {
          payload: "",
        };
      },
    },
    resetTomatoForLongBreak: {
      reducer(state) {
        state.tomatoForLongBreak = 0;
      },
      prepare() {
        return {
          payload: "",
        };
      },
    },
  },
});

export const { addTomatoForLongBreak, resetTomatoForLongBreak } =
  longBreakStateSlice.actions;

export default longBreakStateSlice.reducer;
