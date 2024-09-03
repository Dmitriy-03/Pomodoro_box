import React from "react";
import styles from "./icon.css";
import {
  AddBtnIcon,
  ArrowDownIcon,
  ClockIcon,
  DecreaseMenuIcon,
  DeleteMenuIcon,
  EditMenuIcon,
  EqualizerIcon,
  FocusIcon,
  IncreaseMenuIcon,
  LogoIcon,
  MenuIcon,
  StopIcon,
} from "./Icons";
import { TomatoIcon } from "./Icons/TomatoIcon";

type TSizes = 130 | 115 | 81 | 50 | 40 | 30 | 24 | 18 | 14;

let iconList = {
  LogoIcon: <LogoIcon />,
  AddBtnIcon: <AddBtnIcon />,
  EqualizerIcon: <EqualizerIcon />,
  TomatoIcon: <TomatoIcon />,
  MenuIcon: <MenuIcon />,
  FocusIcon: <FocusIcon />,
  ClockIcon: <ClockIcon />,
  StopIcon: <StopIcon />,
  IncreaseMenuIcon: <IncreaseMenuIcon />,
  DecreaseMenuIcon: <DecreaseMenuIcon />,
  EditMenuIcon: <EditMenuIcon />,
  DeleteMenuIcon: <DeleteMenuIcon />,
  ArrowDownIcon: <ArrowDownIcon />,
};

export enum EIcons {
  logo = "LogoIcon",
  addBtn = `AddBtnIcon`,
  equalizer = `EqualizerIcon`,
  tomato = `TomatoIcon`,
  menu = "MenuIcon",
  focus = `FocusIcon`,
  clock = `ClockIcon`,
  stop = `StopIcon`,
  increase = "IncreaseMenuIcon",
  decrease = "DecreaseMenuIcon",
  edit = "EditMenuIcon",
  delete = "DeleteMenuIcon",
  arrowDown = "ArrowDownIcon",
}

interface IIconProps {
  name: EIcons;
  size?: TSizes;
}

export function Icon({ name, size }: IIconProps) {
  return <div className={styles[`icon-${size}`]}>{iconList[name]}</div>;
}
