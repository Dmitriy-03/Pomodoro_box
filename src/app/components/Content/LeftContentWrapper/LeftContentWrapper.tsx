import React from "react";
import styles from "./leftContentWrapper.css";

interface ILeftWrapperProps {
  children?: React.ReactNode;
}

export function LeftContentWrapper({ children }: ILeftWrapperProps) {
  return <div className={styles.leftContentWrapper}>{children}</div>;
}
