import React from "react";
import styles from "./buttonMenu.css";
import { Dropdown } from "../../../Dropdown";
import { MenuItemList } from "./MenuItemList";
import { MenuIcon } from "../../../Icon/Icons";

interface IButtonMenu {
  onClickActiveInput: () => void;
  taskId: string;
}
export function ButtonMenu({ onClickActiveInput, taskId }: IButtonMenu) {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <MenuItemList onClickActiveInput={onClickActiveInput} taskId={taskId} />
      </Dropdown>
    </div>
  );
}
