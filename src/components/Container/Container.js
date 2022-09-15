import classNames from "classnames";
import React from "react";
import styles from "./Container.module.css";

// const HandleClick = () => {
//   const { user, rememberMe } = this.state;
//   localStorage.setItem("rememberMe", rememberMe);
//   localStorage.setItem("user", rememberMe ? user : "");
// };

export const Container = (props) => {
  return (
    <div className={classNames(styles.container, props.className)}>
      {props.children}
    </div>
  );
};
