import Header from "../Header/Header";
import styles from "./App.module.css";
import { useState } from "react";
import { TaskList } from "../TaskList/TaskList";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import {
  LIST_BACKLOG,
  LIST_FINISHED,
  LIST_IN_PROGRESS,
  LIST_READY,
} from "../../const/listTypes";

const generateNewId = (taskList) => {
  const biggestId = taskList.reduce((acc, item) => {
    return item.id > acc ? item.id : acc;
  }, 0);
  return biggestId + 1;
};

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      name: "Sprint bugfix",
      description: "Fix all the bugs",
      listType: LIST_BACKLOG,
    },
    {
      id: 2,
      name: "Shop page – performance issues",
      description: "Fix all the bugs",
      listType: LIST_READY,
    },
    {
      id: 3,
      name: "User page – performance issues",
      description: "Fix all the bugs",
      listType: LIST_IN_PROGRESS,
    },
    {
      id: 4,
      name: "Main page – performance issues",
      description: "Fix all the bugs",
      listType: LIST_FINISHED,
    },
  ]);

  const addNewTask = (taskName) => {
    const id = generateNewId(taskList);
    const newTask = {
      id: id,
      name: taskName,
      description: "",
      listType: LIST_BACKLOG,
    };

    setTaskList([...taskList, newTask]);
  };

  return (
    <div className={styles.app}>
      <Header />
      <Main>
        <TaskList
          title="Backlog"
          taskList={taskList.filter((item) => item.listType === LIST_BACKLOG)}
          listType={LIST_BACKLOG}
          addNewTask={addNewTask}
        />
        <TaskList
          title="Ready"
          taskList={taskList.filter((item) => item.listType === LIST_READY)}
          listType={LIST_READY}
        />
        <TaskList
          //<-- пропсы --props!!!
          title="in Progress"
          taskList={taskList.filter(
            (item) => item.listType === LIST_IN_PROGRESS
          )}
          listType={LIST_IN_PROGRESS}
        />
        <TaskList
          title="Finished"
          taskList={taskList.filter((item) => item.listType === LIST_FINISHED)}
          listType={LIST_FINISHED}
        />
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
