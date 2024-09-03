import React from "react";
import styles from "./timerContainer.css";
import { TimerTask } from "./TimerTask";
import { Timer } from "./Timer/Timer";

export function TimerContainer() {
  return (
    <div className={styles.timerContainer}>
      <TimerTask />
      <Timer />
    </div>
  );
}
