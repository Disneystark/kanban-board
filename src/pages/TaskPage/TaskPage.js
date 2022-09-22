import React, { useContext } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { TaskListContext } from "../../contexts/TaskListContext";
import styles from "./TaskPage.module.css";

export const TaskPage = () => {
  const params = useParams();
  const { taskList, setTaskDescription } = useContext(TaskListContext);

  const task = taskList.find((item) => {
    return item.id === Number(params.taskId);
  });

  const [isEdit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleEditClick = () => {
    setEdit(true);
    setEditValue(task.description);
  };
  const handleSaveClick = () => {
    setEdit(false);
    setTaskDescription(task.id, editValue.trim());
  };
  const handleCancelClick = () => {
    setEdit(false);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setEditValue(value);
  };

  return (
    <PageLayout>
      {task === undefined ? (
        `Задача с id ${params.taskId} не существует`
      ) : (
        <div className={styles.wrapper}>
          <Link to="/">
            <div className={styles.close_description}></div>
          </Link>
          <div className={styles.heading_link}>{task.name}</div>
          {!isEdit ? (
            <div className={styles.task_description}>
              {task.description.split(/\n/g).reduce((acc, item, index) => {
                if (index === 0) {
                  return [
                    ...acc,
                    <React.Fragment key={index}>{item}</React.Fragment>,
                  ];
                }
                return [
                  ...acc,
                  <br key={index + "br"} />,
                  <React.Fragment key={index}>{item}</React.Fragment>,
                ];
              }, []) || <em>This task has no description</em>}
            </div>
          ) : (
            <div>
              <textarea
                className={styles.textarea}
                value={editValue}
                onChange={handleDescriptionChange}
              />
            </div>
          )}

          {!isEdit ? (
            <button className={styles.edit} onClick={handleEditClick}>
              Редактировать
            </button>
          ) : (
            <>
              <button
                className={styles.button_save_cancel}
                onClick={handleSaveClick}
              >
                Сохранить
              </button>
              <button
                className={styles.button_save_cancel}
                onClick={handleCancelClick}
              >
                Отмена
              </button>
            </>
          )}
        </div>
      )}
    </PageLayout>
  );
};
