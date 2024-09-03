import React from "react";
import styles from "./menuItemList.css";
import { EIcons, Icon } from "../../../../Icon";
import { EColor, Text } from "../../../../Text";
import { useDispatch } from "react-redux";
import {
  decrementTomatoCount,
  deleteTask,
  incrementTomatoCount,
} from "../../../../../store/postTask/postTask";
import { changeChangedByMenuState } from "../../../../../store/buttonStates/buttonStates";

interface IMenuItemList {
  onClickActiveInput: () => void;
  taskId: string;
}

export function MenuItemList({ onClickActiveInput, taskId }: IMenuItemList) {
  const dispatch = useDispatch();

  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementTomatoCount(taskId)),
              dispatch(changeChangedByMenuState(true));
          }}
        >
          <Icon name={EIcons.increase} size={18} />
          <Text size={16} weight={300} color={EColor.grey99}>
            Увеличить
          </Text>
        </button>
      </li>

      <li className={styles.menuItem}>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(decrementTomatoCount(taskId)),
              dispatch(changeChangedByMenuState(true));
          }}
        >
          <Icon name={EIcons.decrease} size={18} />
          <Text size={16} weight={300} color={EColor.grey99}>
            Уменьшить
          </Text>
        </button>
      </li>

      <li className={styles.menuItem}>
        <button className={styles.button} onClick={onClickActiveInput}>
          <Icon name={EIcons.edit} size={18} />
          <Text size={16} weight={300} color={EColor.grey99}>
            Редактировать
          </Text>
        </button>
      </li>

      <li className={styles.menuItem}>
        <button
          className={styles.button}
          onClick={() => dispatch(deleteTask(taskId))}
        >
          <Icon name={EIcons.delete} size={18} />
          <Text size={16} weight={300} color={EColor.grey99}>
            Удалить
          </Text>
        </button>
      </li>
    </ul>
  );
}
