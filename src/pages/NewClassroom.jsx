import React from "react";
import styles from "../components/NewClassroom.module.css";
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
            <h3>클래스룸 생성하기</h3>
            <button className={styles.makeBtn}>
              <Link className={styles.link} to="/classroom">
                생성하기
              </Link>
            </button>
          </header>
          <ul className={styles.class_Info}>
            <li>
              <span>이름</span>
              <input type="text" placeholder="클래스룸 이름을 적어주세요." />
            </li>
            <li>
              <span>설명</span>
              <input type="text" placeholder="클래스룸 설명을 적어주세요." />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
