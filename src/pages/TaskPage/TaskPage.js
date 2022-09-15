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
            <div>X</div>
          </Link>
          <h1>{task.name}</h1>
          {task.description}
        </div>
      )}
    </PageLayout>
  );
};
