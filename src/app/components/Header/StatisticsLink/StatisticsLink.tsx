import React from "react";
import styles from "./statisticslink.css";
import { EIcons, Icon } from "../../Icon";
import { EColor, Text } from "../../Text";
import { NavLink } from "react-router-dom";

export function StatisticsLink() {
  return (
    <NavLink
      to="/statistics"
      className={({ isActive }) =>
        isActive ? styles.linkActive : styles.statisticsLink
      }
    >
      <Icon name={EIcons.equalizer} />
      <Text size={16} color={EColor.red}>
        Статистика
      </Text>
    </NavLink>
  );
}
