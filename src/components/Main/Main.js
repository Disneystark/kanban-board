import React from "react";
import { Container } from "../Container/Container";
import styles from "./Main.module.css";

export const Main = (props) => {
  return (
    <main className={styles.main}>
      <Container className={styles.container}>
        <div className={styles.main_content}>{props.children}</div>
      </Container>
    </main>
  );
};
