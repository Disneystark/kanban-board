import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import IndexPage from "./pages/IndexPage/IndexPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { TaskListContextProvider } from "./contexts/TaskListContext";
import { TaskPage } from "./pages/TaskPage/TaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/tasks/:taskId",
    element: <TaskPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskListContextProvider>
      <RouterProvider router={router} />
    </TaskListContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
