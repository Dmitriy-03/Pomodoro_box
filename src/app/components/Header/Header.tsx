import React, { useEffect } from "react";
import styles from "./header.css";
import { Logo } from "./Logo";
import { StatisticsLink } from "./StatisticsLink";
import { getWeekDay } from "../../utils/getWeekDay";
import { useDispatch } from "react-redux";
import { setTodayDate } from "../../store/entryDateState/entryDateState";
import { useAppSelector } from "../Hooks/useAppDispatch";

export function Header() {
  const dispatch = useDispatch();
  const isLastEntry = useAppSelector((state) => state.entryDate.dayName);
  useEffect(() => {
    if (isLastEntry) return;
    const NOW = new Date();
    dispatch(
      setTodayDate(
        getWeekDay(NOW),
        NOW.getDate(),
        NOW.getTime(),
        NOW.getMonth(),
        NOW.getFullYear()
      )
    );
    console.log("here");
  }, []);

  return (
    <header className={styles.header}>
      <Logo />
      <StatisticsLink />
    </header>
  );
}
