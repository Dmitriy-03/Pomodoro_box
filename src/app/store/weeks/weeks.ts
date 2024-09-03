import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IWeeks {
  [K: string]: boolean;
}

const initialState: IWeeks = {
  currentWeek: true,
  lastWeek: false,
  twoWeeksAgo: false,
};

function setAllWeeksFalseExcludeSelected(
  weeksState: IWeeks,
  weekValue: string
) {
  weeksState[weekValue] = true;
  for (let key in weeksState) {
    if (key != weekValue) {
      weeksState[key] = false;
    }
  }
}

const weeksSlice = createSlice({
  name: "weeks",
  initialState,
  reducers: {
    chooseWeek: {
      reducer(state, action: PayloadAction<string>) {
        setAllWeeksFalseExcludeSelected(state, action.payload);
      },
      prepare(weekValue: string) {
        return {
          payload: weekValue,
        };
      },
    },
  },
});

export const { chooseWeek } = weeksSlice.actions;

export default weeksSlice.reducer;
