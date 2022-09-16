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
        <div className={styles.footer_info}>
          <div className={styles.content_footer}>
            <div className={styles.active_task}>
              Active tasks: {taskListInProgress.length}
            </div>
            <div className={styles.active_task}>
              Finished task: {taskListFinished.length}
            </div>
          </div>
          <div className={styles.footer_name_year}>
            Kanban board by Anton, 2022
          </div>
        </div>
      </Container>
    </footer>
  );
};
