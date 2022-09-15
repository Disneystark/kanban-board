import React, { useContext } from "react";
import { LIST_FINISHED, LIST_IN_PROGRESS } from "../../const/listTypes";
import { TaskListContext } from "../../contexts/TaskListContext";
import { Container } from "../Container/Container";
import styles from "./Footer.module.css";

export const Footer = (props) => {
  const { taskList } = useContext(TaskListContext);

  const taskListInProgress = taskList.filter(
    (item) => item.listType === LIST_IN_PROGRESS
  );

  const taskListFinished = taskList.filter(
    (item) => item.listType === LIST_FINISHED
  );
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content_footer}>
          <div>Active tasks: {taskListInProgress.length}</div>
          <div>Finished task: {taskListFinished.length}</div>
          <div>Kanban board by Anton,2022</div>
        </div>
      </Container>
    </footer>
  );
};
