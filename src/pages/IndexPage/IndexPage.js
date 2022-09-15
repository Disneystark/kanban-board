import Header from "../../components/Header/Header";
import styles from "./IndexPage.module.css";
import { useContext, useState } from "react";
import { TaskList } from "../../components/TaskList/TaskList";
import { Main } from "../../components/Main/Main";
import { Footer } from "../../components/Footer/Footer";
import {
  LIST_BACKLOG,
  LIST_FINISHED,
  LIST_IN_PROGRESS,
  LIST_READY,
} from "../../const/listTypes";
import { TaskListContext } from "../../contexts/TaskListContext";

function IndexPage() {
  const { taskList, addNewTask, setTaskListType } = useContext(TaskListContext);

  const taskListBacklog = taskList.filter(
    (item) => item.listType === LIST_BACKLOG
  );

  const taskListReady = taskList.filter((item) => item.listType === LIST_READY);

  const taskListInProgress = taskList.filter(
    (item) => item.listType === LIST_IN_PROGRESS
  );

  const taskListFinished = taskList.filter(
    (item) => item.listType === LIST_FINISHED
  );
  return (
    <div className={styles.app}>
      <Header />
      <Main>
        <TaskList
          title="Backlog"
          taskList={taskListBacklog}
          listType={LIST_BACKLOG}
          addNewTask={addNewTask}
        />
        <TaskList
          title="Ready"
          taskList={taskListReady}
          listType={LIST_READY}
          taskListToAdd={taskListBacklog}
          setTaskListType={setTaskListType}
        />
        <TaskList
          //<-- пропсы --props!!!
          title="in Progress"
          taskList={taskListInProgress}
          listType={LIST_IN_PROGRESS}
          taskListToAdd={taskListReady}
          setTaskListType={setTaskListType}
        />
        <TaskList
          title="Finished"
          taskList={taskListFinished}
          listType={LIST_FINISHED}
          taskListToAdd={taskListInProgress}
          setTaskListType={setTaskListType}
        />
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default IndexPage;
