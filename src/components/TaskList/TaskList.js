import React, { useState } from "react";
import styles from "./TaskList.module.css";
import { LIST_BACKLOG } from "../../const/listTypes";

export const TaskList = (props) => {
  const [isInputShown, setInputShown] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleAddClick = () => {
    if (props.listType === LIST_BACKLOG) {
      setInputShown(true);
    }
  };

  const handleCancelClick = () => {
    setInputShown(false);
  };

  const handleSubmitClick = () => {
    if (inputValue.trim() !== "") {
      props.addNewTask(inputValue);
      setInputValue("");
      setInputShown(false);
    }
  };

  return (
    <div className={styles.task_list}>
      <div className={styles.task_list_inner}>
        <div className={styles.list_main_heading}> {props.title}</div>

        {props.taskList.map((item) => {
          return (
            <div key={item.id} className={styles.list_task_main}>
              {item.name}
            </div>
          );
        })}

        {isInputShown && (
          <input
            value={inputValue}
            onChange={handleInputChange}
            className={styles.input_Task}
          />
        )}

        {!isInputShown && (
          <button onClick={handleAddClick} className={styles.button_add}>
            + Add card
          </button>
        )}
        {isInputShown && inputValue.length > 0 && (
          <button onClick={handleSubmitClick} className={styles.button_submit}>
            Submit
          </button>
        )}

        {isInputShown && (
          <button className={styles.button_cancel} onClick={handleCancelClick}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};
