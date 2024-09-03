import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./taskItem.css";
import { ButtonMenu } from "./ButtonMenu";
import { useDispatch } from "react-redux";
import { editTaskTitle } from "../../../store/postTask/postTask";

interface ITaskItem {
  taskTitle: string;
  countTomato: number;
  taskId: string;
}

export function TaskItem({ taskTitle, countTomato, taskId }: ITaskItem) {
  const ref = useRef<HTMLInputElement>(null);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isInputFocused, setInputFocused] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInputFocused) {
      ref.current?.focus();
    }
  }, [isInputFocused]);
  const activeInput = () => {
    setIsInputDisabled(false);
    setInputFocused(true);
  };
  const onBlur = () => {
    setIsInputDisabled(true);
    setInputFocused(false);
  };

  function onChangeTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    dispatch(editTaskTitle(event.target.value, taskId));
  }

  return (
    <li className={styles.taskItem}>
      <div className={styles.countTomatoes}>{countTomato}</div>
      <input
        ref={ref}
        className={styles.input}
        type="text"
        value={taskTitle}
        onChange={onChangeTaskTitle}
        onBlur={onBlur}
        disabled={isInputDisabled}
      />
      <ButtonMenu onClickActiveInput={activeInput} taskId={taskId} />
    </li>
  );
}
