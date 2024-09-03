export interface IDays {
  day: string;
  workTime: number | null;
  doneTime: number;
  pauseTime: number;
  focusProcent: number;
  countStops: number;
  countTomato: number;
}

interface IStatisticsData {
  [K: string]: IDays[];
  currentWeek: IDays[];
  lastWeek: IDays[];
  twoWeeksAgo: IDays[];
}

export const statisticsData: IStatisticsData = {
  currentWeek: [
    {
      day: "ПН",
      workTime: 300,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ВТ",
      workTime: 1200,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "СР",
      workTime: 1500,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ЧТ",
      workTime: 6000,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ПТ",
      workTime: 7500,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "СБ",
      workTime: 0,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ВС",
      workTime: 3000,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
  ],
  lastWeek: [
    {
      day: "ПН",
      workTime: 1300,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ВТ",
      workTime: 5,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "СР",
      workTime: 1000,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ЧТ",
      workTime: 5,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ПТ",
      workTime: 231,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "СБ",
      workTime: 5,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ВС",
      workTime: 5,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
  ],
  twoWeeksAgo: [
    {
      day: "ПН",
      workTime: 5,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ВТ",
      workTime: 5,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "СР",
      workTime: 555,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ЧТ",
      workTime: 5,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ПТ",
      workTime: 5,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "СБ",
      workTime: 4444,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
    {
      day: "ВС",
      workTime: 5,
      doneTime: 5,
      pauseTime: 5,
      focusProcent: 5,
      countStops: 5,
      countTomato: 5,
    },
  ],
};
