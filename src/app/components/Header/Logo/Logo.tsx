import React from "react";
import styles from "./logo.css";
import { EIcons, Icon } from "../../Icon";
import { EColor, Text } from "../../Text";
import { NavLink } from "react-router-dom";

export function Logo() {
  return (
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? styles.linkActive : styles.logo)}
    >
      <Icon name={EIcons.logo} size={40} />
      <Text As={"h1"} size={24} color={EColor.red} weight={300}>
        pomodoro_box
      </Text>
    </NavLink>
  );
}
