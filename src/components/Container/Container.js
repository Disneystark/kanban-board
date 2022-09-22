import classNames from "classnames";
import React from "react";
import styles from "./Container.module.css";

export const Container = (props) => {
  return (
    <div className={classNames(styles.container, props.className)}>
      {props.children}
    </div>
  );
};
