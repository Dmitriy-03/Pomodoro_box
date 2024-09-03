import React, { useState } from "react";
import styles from "./weekSelect.css";
import { Dropdown } from "../Dropdown";
import { Icon, EIcons } from "../Icon";
import { Text } from "../../components/Text";
import { MenuWeekList } from "./MenuWeekList";
import { useWeeks } from "../Hooks/useWeeks";
import { changeWeekSelectMenuClickedState } from "../../store/buttonStates/buttonStates";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../Hooks/useAppDispatch";

export function WeekSelect() {
  const [isClicked, setIsClicked] = useState(false);
  const { isCurrentWeek, isLastWeek } = useWeeks();
  const isSelectClicked = useAppSelector(
    (state) => state.buttonStates.isWeekSelectMenuClicked
  );
  const dispatch = useDispatch();

  return (
    <div
      className={isSelectClicked ? styles.weekSelectOpen : styles.weekSelect}
    >
      <Dropdown
        button={
          <button
            className={styles.button}
            onClick={() => {
              setIsClicked(!isClicked),
                dispatch(changeWeekSelectMenuClickedState(!isSelectClicked));
            }}
          >
            <Text size={16}>
              {isCurrentWeek
                ? "Эта неделя"
                : isLastWeek
                ? "Прошедшая неделя"
                : "2 недели назад"}
            </Text>
            <Icon name={EIcons.arrowDown} />
          </button>
        }
      >
        <MenuWeekList />
      </Dropdown>
    </div>
  );
}
