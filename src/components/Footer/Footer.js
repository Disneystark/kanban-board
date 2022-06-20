import React from "react";
import { Container } from "../Container/Container";
import styles from "./Footer.module.css";

export const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content_footer}></div>
      </Container>
    </footer>
  );
};
