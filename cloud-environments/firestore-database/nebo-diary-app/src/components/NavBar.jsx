import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>My Diary</span>
    </nav>
  );
};

export default Navbar;
