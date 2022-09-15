import React, { useState } from "react";
import {
  LIST_BACKLOG,
  LIST_FINISHED,
  LIST_IN_PROGRESS,
  LIST_READY,
} from "../const/listTypes";

const generateNewId = (taskList) => {
  const biggestId = taskList.reduce((acc, item) => {
    return item.id > acc ? item.id : acc;
  }, 0);
  return biggestId + 1;
};

export const TaskListContext = React.createContext(null);

export const TaskListContextProvider = (props) => {
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

  const setTaskListType = (id, listType) => {
    const task = taskList.find((item) => id === item.id);
    const updatedTask = {
      ...task,
      listType: listType,
    };
    const filteredTaskList = taskList.filter((item) => id !== item.id);

    const updatedTaskList = [...filteredTaskList, updatedTask];

    setTaskList(updatedTaskList);
  };

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
    <TaskListContext.Provider
      value={{
        taskList,
        addNewTask,
        setTaskListType,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};
