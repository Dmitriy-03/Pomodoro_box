import React from "react";
import styles from "./tomatoStatistics.css";
import { Icon, EIcons } from "../Icon";
import { EColor, Text } from "../Text";
import { useAppSelector } from "../Hooks/useAppDispatch";
import { useWeeks } from "../Hooks/useWeeks";
import { getSumWeeksStatParameters } from "../../utils/getFullWeeksStatParameters";

export function TomatoStatistics() {
  const statData = useAppSelector((state) => state.statisticsData);
  const { clickedBar, futureClickedBar } = useAppSelector(
    (state) => state.numberClickedBar
  );
  const { isCurrentWeek, isLastWeek, isTwoWeekAgo } = useWeeks();

  return (
    <div className={styles.tomatoStatistics}>
      {futureClickedBar ? (
        <div className={styles.wrapperTomato}>
          <Icon name={EIcons.tomato} />
        </div>
      ) : (
        <>
          <div className={styles.wrapper}>
            <Icon name={EIcons.logo} />
            <Text size={2433} color={EColor.grey99} weight={700}>
              x{" "}
              {(clickedBar && isCurrentWeek
                ? statData.currentWeek[clickedBar].countTomato
                : 0) ||
                (clickedBar && isLastWeek
                  ? statData.lastWeek[clickedBar].countTomato
                  : 0) ||
                (clickedBar && isTwoWeekAgo
                  ? statData.twoWeeksAgo[clickedBar].countTomato
                  : 0) ||
                (clickedBar === null && isCurrentWeek
                  ? getSumWeeksStatParameters(
                      statData.currentWeek,
                      "countTomato"
                    )
                  : 0) ||
                (clickedBar === null && isLastWeek
                  ? getSumWeeksStatParameters(statData.lastWeek, "countTomato")
                  : 0) ||
                (clickedBar === null && isTwoWeekAgo
                  ? getSumWeeksStatParameters(
                      statData.twoWeeksAgo,
                      "countTomato"
                    )
                  : 0)}
            </Text>
          </div>
          <div className={styles.tomatoCount}>
            <Text size={2433} color={EColor.white} weight={700}>
              {(clickedBar && isCurrentWeek
                ? statData.currentWeek[clickedBar].countTomato
                : 0) ||
                (clickedBar && isLastWeek
                  ? statData.lastWeek[clickedBar].countTomato
                  : 0) ||
                (clickedBar && isTwoWeekAgo
                  ? statData.twoWeeksAgo[clickedBar].countTomato
                  : 0) ||
                (clickedBar === null && isCurrentWeek
                  ? getSumWeeksStatParameters(
                      statData.currentWeek,
                      "countTomato"
                    )
                  : 0) ||
                (clickedBar === null && isLastWeek
                  ? getSumWeeksStatParameters(statData.lastWeek, "countTomato")
                  : 0) ||
                (clickedBar === null && isTwoWeekAgo
                  ? getSumWeeksStatParameters(
                      statData.twoWeeksAgo,
                      "countTomato"
                    )
                  : 0)}{" "}
              помидора
            </Text>
          </div>
        </>
      )}
    </div>
  );
}
