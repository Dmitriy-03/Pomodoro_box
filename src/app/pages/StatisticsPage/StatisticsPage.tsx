import React from "react";
import styles from "./statisticsPage.css";
import { Content } from "../../components/Content";
import { Text } from "../../components/Text";
import { WeekSelect } from "../../components/WeekSelect";
import { DayStatistics } from "../../components/DayStatistics";
import { TomatoStatistics } from "../../components/TomatoStatistics";
import { StatisticBarChart } from "../../components/StatisticBarChart";
import { StatisticsTopWrapper } from "../../components/Content/StatisticsTopWrapper";
import { StatisticsMiddleWrapper } from "../../components/Content/StatisticsMiddleWrapper";
import { StatisticsBottomWrapper } from "../../components/Content/StatisticsBottomWrapper";
import { StatisticsIndicatorContainer } from "../../components/StatisticsIndicator/StatisticsIndicatorContainer";

export function StatisticsPage() {
  return (
    <Content>
      <div className={styles.wrapper}>
        <StatisticsTopWrapper>
          <Text As={"h1"} weight={700} size={2433}>
            Ваша активность
          </Text>
          <WeekSelect />
        </StatisticsTopWrapper>
        <StatisticsMiddleWrapper>
          <div className={styles.leftMiddleWrapper}>
            <DayStatistics />
            <TomatoStatistics />
          </div>
          <StatisticBarChart />
        </StatisticsMiddleWrapper>
        <StatisticsBottomWrapper>
          <StatisticsIndicatorContainer />
        </StatisticsBottomWrapper>
      </div>
    </Content>
  );
}
