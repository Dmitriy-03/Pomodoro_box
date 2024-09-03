import { IDays } from "../store/statisticsData/statisticsData";
import { getSumWeeksStatParameters } from "./getFullWeeksStatParameters";

export function getSumWeeksFocusParameter(week: IDays[]) {
  const sumDoneTime = getSumWeeksStatParameters(week, "doneTime");
  const sumWorkTime = getSumWeeksStatParameters(week, "workTime");
  const result = Math.abs(Math.round((sumDoneTime / sumWorkTime) * 100));
  return result;
}
