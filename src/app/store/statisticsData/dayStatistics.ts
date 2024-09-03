import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDays } from "./statisticsData";

interface IPayloadDayStatistic {
  propsName: string;
  propsValue?: string;
}
const initialState: IDays = {
  day: "ЧТ",
  workTime: 0,
  doneTime: 0,
  pauseTime: 0,
  countStops: 0,
  countTomato: 0,
  focusProcent: 0,
};

const dayStatisticsSlice = createSlice({
  name: "dayStatistics",
  initialState,
  reducers: {
    setDayStatistics: {
      reducer(state, action: PayloadAction<IPayloadDayStatistic>) {
        if (
          state[action.payload.propsName] === "day" &&
          action.payload.propsValue
        ) {
          state[action.payload.propsName] = action.payload.propsValue;
        } else {
          state[action.payload.propsName] =
            +state[action.payload.propsName] + 1;
        }
      },
      prepare(propsName: string, propsValue?: string) {
        return {
          payload: {
            propsName,
            propsValue,
          },
        };
      },
    },
    resetDayStatistics: {
      reducer(state) {
        return (state = { ...initialState });
      },
      prepare() {
        return {
          payload: "",
        };
      },
    },
  },
});
export const { setDayStatistics, resetDayStatistics } =
  dayStatisticsSlice.actions;
export default dayStatisticsSlice.reducer;
