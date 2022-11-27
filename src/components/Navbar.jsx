import React from "react";
import { Link } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import styles from "./Navbar.module.css";

export default function Navbar({ children }) {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <GiTeacher className={styles.icon} />
        <h1 className={styles.title}>PKNU Live Coaching</h1>
      </Link>
      {children}
    </header>
  );
}
