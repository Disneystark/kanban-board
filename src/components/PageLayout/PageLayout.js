import React from "react";
import Header from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import styles from "./PageLayout.module.css";

export const PageLayout = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <Main>{props.children}</Main>
      <Footer></Footer>
    </div>
  );
};
