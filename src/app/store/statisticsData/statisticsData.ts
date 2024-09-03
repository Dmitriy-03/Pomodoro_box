import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getNumberWeek } from "../../utils/getNumberWeek";

export interface IDays {
  [K: string]: string | number;
  day: string;
  workTime: number;
  doneTime: number;
  pauseTime: number;
  countStops: number;
  countTomato: number;
  focusProcent: number;
}
export interface IStatisticsData {
  [K: string]: IDays[];
  currentWeek: IDays[];
  lastWeek: IDays[];
  twoWeeksAgo: IDays[];
}
const initialWeek = [
  {
    day: "ПН",
    workTime: 0,
    doneTime: 0,
    pauseTime: 0,
    focusProcent: 0,
    countStops: 0,
    countTomato: 0,
  },
  {
    day: "ВТ",
    workTime: 0,
    doneTime: 0,
    pauseTime: 0,
    focusProcent: 0,
    countStops: 0,
    countTomato: 0,
  },
  {
    day: "СР",
    workTime: 0,
    doneTime: 0,
    pauseTime: 0,
    focusProcent: 0,
    countStops: 0,
    countTomato: 0,
  },
  {
    day: "ЧТ",
    workTime: 0,
    doneTime: 0,
    pauseTime: 0,
    focusProcent: 0,
    countStops: 0,
    countTomato: 0,
  },
  {
    day: "ПТ",
    workTime: 0,
    doneTime: 0,
    pauseTime: 0,
    focusProcent: 0,
    countStops: 0,
    countTomato: 0,
  },
  {
    day: "СБ",
    workTime: 0,
    doneTime: 0,
    pauseTime: 0,
    focusProcent: 0,
    countStops: 0,
    countTomato: 0,
  },
  {
    day: "ВС",
    workTime: 0,
    doneTime: 0,
    pauseTime: 0,
    focusProcent: 0,
    countStops: 0,
    countTomato: 0,
  },
];

const initialState: IStatisticsData = {
  currentWeek: [
    {
      day: "ПН",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ВТ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "СР",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ЧТ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ПТ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "СБ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ВС",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
  ],
  lastWeek: [
    {
      day: "ПН",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ВТ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "СР",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ЧТ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ПТ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "СБ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ВС",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
  ],
  twoWeeksAgo: [
    {
      day: "ПН",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ВТ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "СР",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ЧТ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ПТ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "СБ",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
    {
      day: "ВС",
      workTime: 0,
      doneTime: 0,
      pauseTime: 0,
      focusProcent: 0,
      countStops: 0,
      countTomato: 0,
    },
  ],
};

function getStatisticsDataState(fullStats: IStatisticsData, dayStats: IDays) {
  return {
    ...fullStats,
    currentWeek: fullStats.currentWeek.map((item) =>
      item.day === dayStats.day ? dayStats : item
    ),
  };
}
function shiftWeeksWIthStatsDependsOnDate(
  state: IStatisticsData,
  lastEntryDate: number
) {
  const NOW = new Date();
  const todayWeekNumber = getNumberWeek(NOW);
  const lastWeekNumber = getNumberWeek(new Date(lastEntryDate));
  const difference = todayWeekNumber - lastWeekNumber;
  console.log(todayWeekNumber);
  console.log(lastWeekNumber);
  console.log(difference);
  if (difference === 0) {
    console.log("Эта неделя");
    return state;
  } else if (difference < 0) {
    return {
      ...state,
      twoWeeksAgo: initialWeek,
      lastWeek: initialWeek,
      currentWeek: initialWeek,
    };
  } else if (difference === 1) {
    console.log("Прошла неделя");
    return {
      ...state,
      twoWeeksAgo: state.lastWeek,
      lastWeek: state.currentWeek,
      currentWeek: initialWeek,
    };
  } else if (difference >= 2) {
    console.log("Прошло 2 недели");
    return {
      ...state,
      twoWeeksAgo: state.currentWeek,
      lastWeek: initialWeek,
      currentWeek: initialWeek,
    };
  } else return state;
}
const statisticsSlice = createSlice({
  name: "statisticsData",
  initialState,
  reducers: {
    addDayStatistic: {
      reducer(state, action: PayloadAction<IDays>) {
        const statsObject = {
          ...action.payload,
          focusProcent: Math.abs(
            Math.round(
              (action.payload.doneTime / action.payload.workTime) * 100
            )
          ),
        };
        let lastEntryDate;
        const localStorageData = localStorage.getItem("persist:root");
        if (localStorageData) {
          let entryDate = JSON.parse(localStorageData).entryDate;
          lastEntryDate = JSON.parse(entryDate).msDate;
          console.log(lastEntryDate);
        }
        let newState = shiftWeeksWIthStatsDependsOnDate(state, lastEntryDate);
        return getStatisticsDataState(newState, statsObject);
      },
      prepare({
        day,
        workTime,
        doneTime,
        pauseTime,
        countStops,
        countTomato,
        focusProcent,
      }: IDays) {
        return {
          payload: {
            day,
            workTime,
            doneTime,
            pauseTime,
            countStops,
            countTomato,
            focusProcent,
          },
        };
      },
    },
  },
});

export const { addDayStatistic } = statisticsSlice.actions;

export default statisticsSlice.reducer;
