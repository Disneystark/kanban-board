import React, { useState } from "react";
import styles from "./Header.module.css";
import { Container } from "../Container/Container";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleClick = () => {
    const nextState = !isMenuOpen;
    setMenuOpen(nextState);
  };

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.header_content}>
          <div className={styles.heading}>Awesome Kanban Boards</div>
          <div
            onClick={toggleClick}
            className={
              styles.account_button + (isMenuOpen ? " " + styles.active : "")
            }
          >
            <div className={styles.iconHeader}></div>
            <div className={styles.dropdown}>
              <div className={styles.tringle}></div>
              <div className={styles.dropdown_content}>
                <a href="#">Profile</a>
                <a href="#">Log Out</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
