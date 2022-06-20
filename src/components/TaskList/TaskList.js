import React, { useState } from "react";
import styles from "./TaskList.module.css";
import { LIST_BACKLOG } from "../../const/listTypes";

export const TaskList = (props) => {
  const [isInputShown, setInputShown] = useState(false); //false

  const handleAddClick = () => {
    if (props.listType === LIST_BACKLOG) {
      setInputShown(true);
    }
  };

  const handleCancelClick = () => {
    setInputShown(false);
  };

  return (
    <div className={styles.task_list}>
      <div className={styles.task_list_inner}>
        <div className={styles.list_main_heading}> {props.title}</div>

        {props.taskList.map((item) => {
          return <div className={styles.list_task_main}>{item.name}</div>;
        })}
        {isInputShown && <input className={styles.input_Task} />}
        {!isInputShown && (
          <button onClick={handleAddClick} className={styles.button_add}>
            + Add card
          </button>
        )}
        {isInputShown && <button onClick={handleCancelClick}>Cancel</button>}

        <button className={styles.button_submit}>Submit</button>
      </div>
    </div>
  );
};
