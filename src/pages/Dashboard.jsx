import React from "react";
import styles from "../components/Dashboard.module.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className={styles.classroomMaker_page}>
      <nav className={styles.navbar}>
        <h1 className={styles.title}>PKNU Live-coaching</h1>
        <button className={styles.logoutBtn}>Logout</button>
      </nav>
      <div className={styles.main}>
        <aside className={styles.aside}>
          <p className={styles.user_name}>Elkana</p>
          <ul>
            <li>모든 클래스룸</li>
            <li>내 클래스룸</li>
          </ul>
        </aside>
        <section className={styles.section}>
          <header className={styles.header}>
            <input
              className={styles.input}
              type="text"
              placeholder="       Search Classroom"
            />
            <button className={styles.makeBtn}>
              <Link className={styles.link} to="/newClassroom">
                New Classroom
              </Link>
            </button>
          </header>
          <div className={styles.classrooms}></div>
        </section>
      </div>
    </div>
  );
}
