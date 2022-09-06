import React, { useEffect, useState } from "react";
import styles from "./TaskList.module.css";
import { LIST_BACKLOG } from "../../const/listTypes";

export const TaskList = (props) => {
  const [isInputShown, setInputShown] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [isSelectShown, setSelectShown] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(
    props.taskListToAdd && props.taskListToAdd.length > 0
      ? props.taskListToAdd[0].id
      : undefined
  );

  // useEffect(() => {
  // console.log(selectedItem); //для отладки
  // }, [selectedItem]);// подписка на переменные,при изменении значений.

  useEffect(() => {
    setSelectedItemId(
      props.taskListToAdd && props.taskListToAdd.length > 0
        ? props.taskListToAdd[0].id
        : undefined
    );
  }, [props.taskListToAdd]);

  const handleSelectChange = (event) => {
    const value = Number(event.target.value);
    setSelectedItemId(value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleAddClick = () => {
    if (props.listType === LIST_BACKLOG) {
      setInputShown(true);
    } else {
      setSelectShown(true);
    }
  };

  const handleCancelClick = () => {
    setInputShown(false);
    setSelectShown(false);
  };

  const handleSubmitClick = () => {
    if (props.listType === LIST_BACKLOG) {
      if (inputValue.trim() !== "") {
        props.addNewTask(inputValue);
        setInputValue("");
        setInputShown(false);
      }
    } else {
      setSelectShown(false);
      if (selectedItemId === undefined) {
        return;
      }

      props.setTaskListType(selectedItemId, props.listType);
    }
  };

  return (
    <div className={styles.task_list}>
      <div className={styles.task_list_inner}>
        <div className={styles.task_list_scrollable}>
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

          {isSelectShown && (
            <select
              value={selectedItemId}
              onChange={handleSelectChange}
              className={styles.select_task}
            >
              {props.taskListToAdd.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          )}

          {!isInputShown && !isSelectShown && (
            <button onClick={handleAddClick} className={styles.button_add}>
              + Add card
            </button>
          )}
          {((isInputShown && inputValue.length > 0) || isSelectShown) && (
            <button
              onClick={handleSubmitClick}
              className={styles.button_submit}
            >
              Submit
            </button>
          )}

          {(isInputShown || isSelectShown) && (
            <button
              className={styles.button_cancel}
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
