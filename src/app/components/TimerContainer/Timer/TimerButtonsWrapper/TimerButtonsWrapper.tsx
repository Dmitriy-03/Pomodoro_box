import React from "react";
import styles from "./timerButtonsWrapper.css";
import { EColor, Text } from "../../../Text";

export function TimerButtonsWrapper() {
  return (
    <div className={styles.timerButtonsWrapper}>
      <button className={styles.startButton}>
        <Text size={16} weight={500} color={EColor.white}>
          Старт
        </Text>
      </button>
      <button className={styles.stopButton}>
        <Text size={16} weight={500} color={EColor.greyC4}>
          Стоп
        </Text>
      </button>
    </div>
  );
}
