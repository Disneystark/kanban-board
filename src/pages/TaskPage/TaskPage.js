import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { TaskListContext } from "../../contexts/TaskListContext";
import styles from "./TaskPage.module.css";

export const TaskPage = () => {
  const params = useParams();
  const { taskList } = useContext(TaskListContext);
  const task = taskList.find((item) => {
    return item.id === Number(params.taskId);
  });

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
          <div className={styles.task_description}>{task.description}</div>
        </div>
      )}
    </PageLayout>
  );
};
