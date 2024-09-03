import React from "react";
import styles from "./text.css";
import classNames from "classnames";

type TSizes = 150 | 72 | 64 | 2433 | 24 | 2417 | 16 | 1633 | 1628 | 12;

type TWeights = 200 | 300 | 400 | 500 | 700;

export enum EColor {
  black = "black",
  green = "green",
  red = "red",
  white = "white",
  grey99 = "grey99",
  greyC4 = "greyC4",
}

interface ITextProps {
  As?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "div" | "input";
  children?: React.ReactNode;
  size: TSizes;
  weight?: TWeights;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = "span",
    color = EColor.black,
    weight = 400,
    children,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
  } = props;
  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    styles[`w${weight}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );
  return <As className={classes}>{children}</As>;
}
