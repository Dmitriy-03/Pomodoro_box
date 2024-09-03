import React, { useEffect, useState } from "react";
import styles from "./timerTask.css";
import { EColor, Text } from "../../Text";
import { useAppSelector } from "../../Hooks/useAppDispatch";
import { changeChangedByTimerState } from "../../../store/buttonStates/buttonStates";
import { useDispatch } from "react-redux";

export function TimerTask() {
  const tasks = useAppSelector((state) => state.tasks);
  const currentTask = tasks[0];
  const decrementByMenu = useAppSelector(
    (state) => state.buttonStates.isChangedTomatoCountByMenu
  );
  const decrementByTimer = useAppSelector(
    (state) => state.buttonStates.isChangedTomatoCountByTimer
  );
  const stopHoverState = useAppSelector(
    (state) => state.buttonStates.isStopButtonHovered
  );
  const readyHoverState = useAppSelector(
    (state) => state.buttonStates.isReadyButtonHovered
  );

  const [initialTomatoNumber, setInitialTomatoNumber] = useState(1);
  const [currentCountTomato, setCurrentCountTomato] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!decrementByTimer) {
      setInitialTomatoNumber(currentTask?.countTomato);
      setCurrentCountTomato(currentTask?.countTomato);
    }
    if (!decrementByMenu && decrementByTimer) {
      setCurrentCountTomato(currentTask?.countTomato);
    }
    if (
      decrementByMenu &&
      decrementByTimer &&
      currentTask?.countTomato > currentCountTomato
    ) {
      setInitialTomatoNumber((prevState) => prevState + 1);
      setCurrentCountTomato(currentTask?.countTomato);
    }
    if (
      decrementByMenu &&
      decrementByTimer &&
      currentTask?.countTomato < currentCountTomato
    ) {
      setInitialTomatoNumber((prevState) => prevState - 1);
      setCurrentCountTomato(currentTask?.countTomato);
    }
  }, [currentTask?.countTomato, decrementByMenu, decrementByTimer]);

  useEffect(() => {
    dispatch(changeChangedByTimerState(false));
  }, [currentTask?.taskId]);

  return (
    <div
      className={
        styles.timerTask +
        " " +
        (stopHoverState || readyHoverState ? styles.bgRed : "")
      }
    >
      <Text As={"div"} size={16} weight={700} color={EColor.white}>
        {currentTask ? currentTask.taskTitle : "Название текущей задачи"}
      </Text>
      <Text As={"div"} size={16} weight={700} color={EColor.white}>
        Помидор{" "}
        {currentTask ? initialTomatoNumber - (currentCountTomato - 1) : 1}
      </Text>
    </div>
  );
}
