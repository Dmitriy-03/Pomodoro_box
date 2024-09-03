import React from "react";
import styles from "./dayStatistics.css";
import { EColor, Text } from "../Text";
import { useAppSelector } from "../Hooks/useAppDispatch";
import { useWeeks } from "../Hooks/useWeeks";
import { getTimeFromMs } from "../../utils/getTimeFromMs";
import { getSumWeeksStatParameters } from "../../utils/getFullWeeksStatParameters";
import { getWeekDayNameByIndex } from "../../utils/getWeekDay";

export function DayStatistics() {
  const statData = useAppSelector((state) => state.statisticsData);
  const { clickedBar, futureClickedBar } = useAppSelector(
    (state) => state.numberClickedBar
  );
  const { isCurrentWeek, isLastWeek, isTwoWeekAgo } = useWeeks();

  return (
    <div className={styles.dayStatistics}>
      <Text As={"h2"} weight={700} size={2433}>
        {(clickedBar != null && getWeekDayNameByIndex(clickedBar)) ||
          (clickedBar === null && "За всю неделю")}
      </Text>
      <div>
        {futureClickedBar ? (
          <Text size={1628}>Нет данных</Text>
        ) : (
          <>
            <Text size={1628}>Вы работали над задачами в течение </Text>
            <Text size={1628} color={EColor.red}>
              {(clickedBar != null && isCurrentWeek
                ? getTimeFromMs(statData.currentWeek[clickedBar].workTime)
                : 0) ||
                (clickedBar != null && isLastWeek
                  ? getTimeFromMs(statData.lastWeek[clickedBar].workTime)
                  : 0) ||
                (clickedBar != null && isTwoWeekAgo
                  ? getTimeFromMs(statData.twoWeeksAgo[clickedBar].workTime)
                  : 0) ||
                (clickedBar === null && isCurrentWeek
                  ? getTimeFromMs(
                      getSumWeeksStatParameters(
                        statData.currentWeek,
                        "workTime"
                      )
                    )
                  : 0) ||
                (clickedBar === null && isLastWeek
                  ? getTimeFromMs(
                      getSumWeeksStatParameters(statData.lastWeek, "workTime")
                    )
                  : 0) ||
                (clickedBar === null && isTwoWeekAgo
                  ? getTimeFromMs(
                      getSumWeeksStatParameters(
                        statData.twoWeeksAgo,
                        "workTime"
                      )
                    )
                  : 0)}
            </Text>
          </>
        )}
      </div>
    </div>
  );
}
