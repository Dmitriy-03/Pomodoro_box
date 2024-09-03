import React from "react";
import styles from "./statisticsIndicator.css";
import { Text } from "../Text";
import { EIcons, Icon } from "../Icon";

export interface IindicatorIcons {
  focus?: boolean;
  pause?: boolean;
  stop?: boolean;
}

interface IStatisticsIndicator {
  statName: string;
  indicatorValue: number | string;
  indicatorIcons: IindicatorIcons;
}

export function StatisticsIndicator({
  statName,
  indicatorValue,
  indicatorIcons,
}: IStatisticsIndicator) {
  return (
    <div
      className={
        styles.statisticsIndicators +
        " " +
        (indicatorIcons.focus
          ? styles.backgroundFF
          : indicatorIcons.pause
          ? styles.backgroundDF
          : indicatorIcons.stop
          ? styles.backgroundC5
          : "")
      }
    >
      <div className={styles.wrapper}>
        <Text As={"div"} weight={700} size={2433}>
          {statName}
        </Text>
        {indicatorIcons.focus && (
          <Text As={"div"} size={64}>
            {indicatorValue}%
          </Text>
        )}
        {indicatorIcons.pause && (
          <Text As={"div"} size={64}>
            {indicatorValue}
          </Text>
        )}
        {indicatorIcons.stop && (
          <Text As={"div"} size={64}>
            {indicatorValue}
          </Text>
        )}
      </div>
      {indicatorIcons.focus && <Icon name={EIcons.focus} />}
      {indicatorIcons.pause && <Icon name={EIcons.clock} />}
      {indicatorIcons.stop && <Icon name={EIcons.stop} />}
    </div>
  );
}
