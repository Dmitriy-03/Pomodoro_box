import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IClickedBar {
  clickedBar: number | null;
  futureClickedBar: boolean;
}

const initialState: IClickedBar = {
  clickedBar: null,
  futureClickedBar: false,
};

const numberClickedBarSlice = createSlice({
  name: "numberClickedBar",
  initialState,
  reducers: {
    setClickedBarNum: {
      reducer(state, action: PayloadAction<number>) {
        state.clickedBar = action.payload;
      },
      prepare(barNum: number) {
        return {
          payload: barNum,
        };
      },
    },
    setFutureClickedBar: {
      reducer(state, action: PayloadAction<boolean>) {
        state.futureClickedBar = action.payload;
      },
      prepare(futureState: boolean) {
        return {
          payload: futureState,
        };
      },
    },
    resetClickedBarNum: {
      reducer(state, action: PayloadAction<string>) {
        state.clickedBar = null;
      },
      prepare() {
        return {
          payload: "",
        };
      },
    },
  },
});

export const { setClickedBarNum, resetClickedBarNum, setFutureClickedBar } =
  numberClickedBarSlice.actions;

export default numberClickedBarSlice.reducer;
