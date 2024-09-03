import React from "react";
import { StatisticsIndicator } from "../StatisticsIndicator";
import { useWeeks } from "../../Hooks/useWeeks";
import { useAppSelector } from "../../Hooks/useAppDispatch";
import { getTimeFromMs } from "../../../utils/getTimeFromMs";
import { getSumWeeksStatParameters } from "../../../utils/getFullWeeksStatParameters";
import { getSumWeeksFocusParameter } from "../../../utils/getSumWeeksFocusParameters";

export function StatisticsIndicatorContainer() {
  const statData = useAppSelector((state) => state.statisticsData);
  const clickedBar = useAppSelector(
    (state) => state.numberClickedBar.clickedBar
  );
  const { isCurrentWeek, isLastWeek, isTwoWeekAgo } = useWeeks();

  return (
    <>
      <StatisticsIndicator
        statName={"Фокус"}
        indicatorValue={
          (clickedBar != null && isCurrentWeek
            ? statData.currentWeek[clickedBar].focusProcent
            : 0) ||
          (clickedBar != null && isLastWeek
            ? statData.lastWeek[clickedBar].focusProcent
            : 0) ||
          (clickedBar != null && isTwoWeekAgo
            ? statData.twoWeeksAgo[clickedBar].focusProcent
            : 0) ||
          (clickedBar === null && isCurrentWeek
            ? getSumWeeksFocusParameter(statData.currentWeek)
            : 0) ||
          (clickedBar === null && isLastWeek
            ? getSumWeeksFocusParameter(statData.lastWeek)
            : 0) ||
          (clickedBar === null && isTwoWeekAgo
            ? getSumWeeksFocusParameter(statData.twoWeeksAgo)
            : 0)
        }
        indicatorIcons={{ focus: true }}
      />
      <StatisticsIndicator
        statName={"Время на паузе"}
        indicatorValue={
          (clickedBar != null && clickedBar >= 0 && isCurrentWeek
            ? getTimeFromMs(statData.currentWeek[clickedBar].pauseTime, true)
            : 0) ||
          (clickedBar != null && clickedBar >= 0 && isLastWeek
            ? getTimeFromMs(statData.lastWeek[clickedBar].pauseTime, true)
            : 0) ||
          (clickedBar != null && clickedBar >= 0 && isTwoWeekAgo
            ? getTimeFromMs(statData.twoWeeksAgo[clickedBar].pauseTime, true)
            : 0) ||
          (clickedBar === null && isCurrentWeek
            ? getTimeFromMs(
                getSumWeeksStatParameters(statData.currentWeek, "pauseTime"),
                true
              )
            : 0) ||
          (clickedBar === null && isLastWeek
            ? getTimeFromMs(
                getSumWeeksStatParameters(statData.lastWeek, "pauseTime"),
                true
              )
            : 0) ||
          (clickedBar === null && isTwoWeekAgo
            ? getTimeFromMs(
                getSumWeeksStatParameters(statData.twoWeeksAgo, "pauseTime"),
                true
              )
            : 0)
        }
        indicatorIcons={{ pause: true }}
      />
      <StatisticsIndicator
        statName={"Остановки"}
        indicatorValue={
          (clickedBar != null && isCurrentWeek
            ? statData.currentWeek[clickedBar].countStops
            : 0) ||
          (clickedBar != null && isLastWeek
            ? statData.lastWeek[clickedBar].countStops
            : 0) ||
          (clickedBar != null && isTwoWeekAgo
            ? statData.twoWeeksAgo[clickedBar].countStops
            : 0) ||
          (clickedBar === null && isCurrentWeek
            ? getSumWeeksStatParameters(statData.currentWeek, "countStops")
            : 0) ||
          (clickedBar === null && isLastWeek
            ? getSumWeeksStatParameters(statData.lastWeek, "countStops")
            : 0) ||
          (clickedBar === null && isTwoWeekAgo
            ? getSumWeeksStatParameters(statData.twoWeeksAgo, "countStops")
            : 0)
        }
        indicatorIcons={{ stop: true }}
      />
    </>
  );
}
