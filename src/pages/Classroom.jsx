import React from "react";
import styles from "../components/Classroom.module.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className={styles.classroomMaker_page}>
      <nav className={styles.navbar}>
        <h1 className={styles.title}>클래스룸 이름 받아온 것</h1>
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
              placeholder="       Search Project"
            />
            <button className={styles.makeBtn}>
              <Link className={styles.link} to="/newProject">
                New Project
              </Link>
            </button>
          </header>
          <div className={styles.classrooms}></div>
        </section>
      </div>
    </div>
  );
}
