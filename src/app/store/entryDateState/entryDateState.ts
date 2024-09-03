import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IEntryDate {
  dayName: string;
  msDate: number;
  day: number;
  month: number;
  year: number;
}

const initialState: IEntryDate = {
  msDate: 0,
  day: 0,
  month: 0,
  year: 0,
  dayName: "",
};

const entryDateSlice = createSlice({
  name: "entryDate",
  initialState,
  reducers: {
    setTodayDate: {
      reducer(state, action: PayloadAction<IEntryDate>) {
        state.msDate = action.payload.msDate;
        state.dayName = action.payload.dayName;
        state.day = action.payload.day;
        state.month = action.payload.month;
        state.year = action.payload.year;
      },
      prepare(
        dayName: string,
        day: number,
        msDate: number,
        month: number,
        year: number
      ) {
        return {
          payload: {
            dayName,
            day,
            msDate,
            month,
            year,
          },
        };
      },
    },
  },
});

export const { setTodayDate } = entryDateSlice.actions;
export default entryDateSlice.reducer;
