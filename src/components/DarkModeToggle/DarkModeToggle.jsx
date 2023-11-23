"use client"

import { useContext } from "react";
import { ThemeContext } from "../../app/context/ThemeContext";
import styles from "./darkModeToggle.module.css";

const DarkModeToggle = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { top: "2px" } : { bottom: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;