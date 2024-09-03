import React from "react";
import styles from "./statisticsTopWrapper.css";

interface IStatisticsTopWrapper {
  children?: React.ReactNode;
}

export function StatisticsTopWrapper({ children }: IStatisticsTopWrapper) {
  return <div className={styles.top}>{children}</div>;
}
