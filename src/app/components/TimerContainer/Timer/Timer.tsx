import React, { MouseEvent, useEffect, useMemo, useState } from "react";
import styles from "./timer.css";
import { EColor, Text } from "../../Text";
import { EIcons, Icon } from "../../Icon";
import { getPadTime } from "../../../utils/getPadTime";
import { useAppSelector } from "../../Hooks/useAppDispatch";
import { useDispatch } from "react-redux";
import {
  decrementTomatoCount,
  deleteTask,
} from "../../../store/postTask/postTask";
import {
  changeChangedByMenuState,
  changeChangedByTimerState,
  changeReadyBtnHoverState,
  changeStopBtnHoverState,
} from "../../../store/buttonStates/buttonStates";
import { getWeekDay } from "../../../utils/getWeekDay";
import {
  resetDayStatistics,
  setDayStatistics,
} from "../../../store/statisticsData/dayStatistics";
import { addDayStatistic } from "../../../store/statisticsData/statisticsData";
import { setTodayDate } from "../../../store/entryDateState/entryDateState";
import {
  addTomatoForLongBreak,
  resetTomatoForLongBreak,
} from "../../../store/longBreakState/longBreakState";

const defaultDayObj = {
  day: "ЧТ",
  workTime: 4444,
  doneTime: 4444,
  pauseTime: 3333,
  focusProcent: 1111,
  countStops: 2,
  countTomato: 0,
};

export function Timer() {
  const tasks = useAppSelector((state) => state.tasks);
  const lastEntry = useAppSelector((state) => state.entryDate);
  const tomatoForLongBreak = useAppSelector(
    (state) => state.tomatoLongBreak.tomatoForLongBreak
  );
  const currentTask = tasks[0];
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(25 * 60);
  const [isCountDowning, setIsCountDowning] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);
  const [isHoveredStop, setIsHoveredStop] = useState(false);
  const minutesValue = Math.floor(timer / 60);
  const minutes = getPadTime(Math.floor(timer / 60));
  const seconds = getPadTime(timer - minutesValue * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCountDowning && setTimer((timer) => (timer >= 1 ? timer - 1 : 0));
    }, 1000);
    if (currentTask?.countTomato === 0)
      dispatch(deleteTask(currentTask.taskId));
    if (!currentTask) setTimer(5);
    if (tomatoForLongBreak === 4) {
      setIsBreaking(true);
      setTimer(25 * 60);
      dispatch(resetTomatoForLongBreak());
    }
    return () => {
      clearInterval(interval);
    };
  }, [currentTask?.countTomato, isCountDowning]);

  useEffect(() => {
    if (timer === 0 && !isBreaking) {
      setIsCountDowning(false);
      dispatch(setDayStatistics("countTomato"));
      dispatch(decrementTomatoCount(currentTask?.taskId));
      dispatch(changeChangedByMenuState(false));
      dispatch(addTomatoForLongBreak());
      setIsBreaking(true);
      setTimer(25 * 60);
    }
    if (timer === 0 && isBreaking) {
      setIsCountDowning(false);
      setIsBreaking(false);
      setTimer(25 * 60);
    }
  }, [timer, isBreaking]);

  useEffect(() => {
    setTimer(25 * 60);
    setIsBreaking(false);
  }, [currentTask?.taskId]);

  useEffect(() => {
    isCountDowning && dispatch(setDayStatistics("workTime"));
    isCountDowning && !isBreaking && dispatch(setDayStatistics("doneTime"));
  }, [timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      isPausing && !isBreaking && dispatch(setDayStatistics("pauseTime"));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isPausing]);

  useEffect(() => {
    if (lastEntry.dayName) {
      const NOW = new Date();
      if (
        NOW.getDate() != lastEntry.day ||
        NOW.getMonth() != lastEntry.month ||
        NOW.getFullYear() != lastEntry.year
      ) {
        console.log("День сменился");
        dispatch(addDayStatistic(defaultDayObj));
        dispatch(resetDayStatistics());
        dispatch(
          setTodayDate(
            getWeekDay(NOW),
            NOW.getDate(),
            NOW.getTime(),
            NOW.getMonth(),
            NOW.getFullYear()
          )
        );
      }
    }
  }, []);
  const handleStart = () => {
    if (isPausing) {
      setIsPausing(!isPausing);
    }
    setIsCountDowning(true);
    setIsHoveredStop(false);
    dispatch(changeStopBtnHoverState(false));
    dispatch(changeReadyBtnHoverState(false));
    dispatch(changeChangedByTimerState(true));
  };

  const handleStop = () => {
    if (isBreaking) {
      setIsBreaking(false);
      setTimer(25 * 60);
    }
    !isBreaking && dispatch(setDayStatistics("countStops"));
    setIsCountDowning(false);
    setIsPausing(false);
    setTimer(25 * 60);
  };

  const handlePause = () => {
    setIsCountDowning(false);
    setIsPausing(true);
  };

  const handleReady = () => {
    setIsCountDowning(false);
    setIsPausing(false);
    setTimer(25 * 60);

    if (!isBreaking) {
      setIsBreaking(true);
      setTimer(5 * 60);
    }

    dispatch(setDayStatistics("countTomato"));
    dispatch(decrementTomatoCount(currentTask.taskId));
    dispatch(changeChangedByMenuState(false));
    dispatch(addTomatoForLongBreak());
  };

  const handleAddTime = () => {
    setTimer((timer) => timer + 60);
  };

  const onMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const typeButton = button.firstChild?.textContent;
    if (typeButton === "Сделано") {
      dispatch(changeReadyBtnHoverState(true));
    }
    if (typeButton === "Стоп") {
      setIsHoveredStop(true);
      dispatch(changeStopBtnHoverState(true));
    }
  };

  const onMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const typeButton = button.firstChild?.textContent;
    console.log(typeButton);
    if (typeButton === "Сделано") {
      dispatch(changeReadyBtnHoverState(false));
    }
    if (typeButton === "Стоп") {
      setIsHoveredStop(false);
      dispatch(changeStopBtnHoverState(false));
    }
  };

  return (
    <div className={styles.timer}>
      <div
        className={
          styles.wrapper + " " + (isHoveredStop ? styles.stopClicked : "")
        }
      >
        <Text As={"div"} size={150} weight={200}>
          {minutes}
        </Text>
        <Text As={"div"} size={150} weight={200}>
          :
        </Text>
        <Text As={"div"} size={150} weight={200}>
          {seconds}
        </Text>
        <button onClick={handleAddTime} className={styles.addTimeBtn}>
          <Icon name={EIcons.addBtn} size={50} />
        </button>
      </div>

      <div className={styles.title}>
        {isBreaking ? (
          <Text size={24} color={EColor.green}>
            Перерыв
          </Text>
        ) : (
          <>
            <Text size={16} color={EColor.grey99}>
              Задача 1 -{" "}
            </Text>
            <Text size={16}>
              {currentTask
                ? currentTask.taskTitle
                : "Текущая задача не добавлена"}
            </Text>
          </>
        )}
      </div>

      <div className={styles.timerButtonsWrapper}>
        {isCountDowning ? (
          <button onClick={handlePause} className={styles.startButton}>
            <Text size={16} weight={500} color={EColor.white}>
              Пауза
            </Text>
          </button>
        ) : (
          <button
            onClick={handleStart}
            className={styles.startButton}
            disabled={currentTask ? false : true}
          >
            <Text size={16} weight={500} color={EColor.white}>
              {isPausing && currentTask ? "Продолжить" : "Старт"}
            </Text>
          </button>
        )}
        {isPausing && !isBreaking && currentTask ? (
          <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleReady}
            className={styles.stopButton}
          >
            <Text size={16} weight={500} color={EColor.red}>
              Сделано
            </Text>
          </button>
        ) : (
          <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleStop}
            className={styles.stopButton}
            disabled={currentTask && isCountDowning ? false : true}
          >
            <Text size={16} weight={500} color={EColor.red}>
              {isBreaking ? "Пропустить" : "Стоп"}
            </Text>
          </button>
        )}
      </div>
    </div>
  );
}
