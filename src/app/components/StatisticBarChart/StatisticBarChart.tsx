import React, { useRef, MouseEvent, useState, useEffect } from "react";
import styles from "./statisticBarChart.css";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { options } from "./chartBarOptions";
import { useWeeks } from "../Hooks/useWeeks";
import { useAppSelector } from "../Hooks/useAppDispatch";
import { useDispatch } from "react-redux";
import {
  resetClickedBarNum,
  setClickedBarNum,
  setFutureClickedBar,
} from "../../store/numberClickedBar/numberClickedBar";
import { useOnClickOutside } from "../Hooks/useOnClickOutside";
import { getBarBackground } from "../../utils/getBarBackground";
import { getWeekDay, getWeekDayIndexByName } from "../../utils/getWeekDay";
import { addDayStatistic } from "../../store/statisticsData/statisticsData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export function StatisticBarChart() {
  const [indexClickedBar, setIndexClickedBar] = useState<number | null>(null);

  const statisticsData = useAppSelector((state) => state.statisticsData);
  const dayStatisticsData = useAppSelector((state) => state.dayStatistics);
  const clickedBar = useAppSelector(
    (state) => state.numberClickedBar.clickedBar
  );
  const { isCurrentWeek, isLastWeek, isTwoWeekAgo } = useWeeks();

  const dispatch = useDispatch();
  const ref = useRef(null);
  const chartRef = useRef(null);

  useOnClickOutside(ref, () => {
    dispatch(resetClickedBarNum()), dispatch(setFutureClickedBar(false));
  });

  useEffect(() => {
    dispatch(addDayStatistic(dayStatisticsData));
  }, [dayStatisticsData]);

  const data = {
    labels,
    datasets: [
      {
        label: "Время",
        data: isCurrentWeek
          ? statisticsData.currentWeek.map((day) => day.workTime)
          : isLastWeek
          ? statisticsData.lastWeek.map((day) => day.workTime)
          : isTwoWeekAgo
          ? statisticsData.lastWeek.map((day) => day.workTime)
          : [0, 0, 0, 0, 0, 0, 0],
        backgroundColor:
          clickedBar != null
            ? getBarBackground(indexClickedBar)
            : getBarBackground(null),
        hoverBackgroundColor: "rgba(220, 62, 34, 1)",
        barPercentage: 0.8,
        barThickness: "flex" as const,
        minBarLength: 5,
      },
    ],
  };

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    if (
      chartRef.current &&
      getElementAtEvent(chartRef.current, event).length > 0
    ) {
      const indexClickedBar = getElementAtEvent(chartRef.current, event)[0]
        .index;
      setIndexClickedBar(indexClickedBar);
      dispatch(setClickedBarNum(indexClickedBar));
      if (isCurrentWeek) {
        const currentDayName = getWeekDay(new Date());
        const currentDayIndex = getWeekDayIndexByName(currentDayName);
        if (indexClickedBar > currentDayIndex) {
          dispatch(setFutureClickedBar(true));
        } else {
          dispatch(setFutureClickedBar(false));
        }
      }
    }
  };

  return (
    <div className={styles.bar} ref={ref}>
      <Bar
        options={options}
        data={data}
        onClick={onClick}
        ref={chartRef}
        height={window.innerWidth > 576 ? 150 : 250}
      />
    </div>
  );
}
