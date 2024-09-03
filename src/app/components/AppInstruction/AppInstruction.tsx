import React from "react";
import styles from "./appInstruction.css";
import { EColor, Text } from "../../components/Text";

export function AppInstruction() {
  return (
    <div className={styles.instructionWrapper}>
      <Text As={"h2"} size={24_33} weight={700}>
        Ура! Теперь можно начать работать:
      </Text>
      <ul className={styles.instructionList}>
        <li>
          <Text size={1633}>
            Выберите категорию и напишите название текущей задачи
          </Text>
        </li>
        <li>
          <Text size={1633}>Запустите таймер («помидор»)</Text>
        </li>
        <li>
          <Text size={1633}>Работайте пока «помидор» не прозвонит</Text>
        </li>
        <li>
          <Text size={1633}>Сделайте короткий перерыв (3-5 минут)</Text>
        </li>
        <li>
          <Text size={1633}>
            Продолжайте работать «помидор» за «помидором», пока задача не будут
            выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30
            минут).
          </Text>
        </li>
      </ul>
    </div>
  );
}
