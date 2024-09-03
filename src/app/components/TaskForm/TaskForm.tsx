import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./taskForm.css";
import { EColor, Text } from "../Text";
import { useDispatch } from "react-redux";
import { taskAdded } from "../../store/postTask/postTask";

export function TaskForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();
  const changeTasTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (taskTitle) {
      dispatch(taskAdded(taskTitle));
      setTaskTitle("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Название задачи"
        onChange={changeTasTitle}
        value={taskTitle}
      />
      <button type="submit" className={styles.button}>
        <Text size={16} weight={500} color={EColor.white}>
          Добавить
        </Text>
      </button>
    </form>
  );
}
