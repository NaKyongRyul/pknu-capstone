import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/Home.module.css";
import { GiTeacher } from "react-icons/gi";

export default function Home() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <div className={styles.home_page}>
      <header className={styles.header}>
        <button>
          <GiTeacher className={styles.icon} />
        </button>
        <div className={styles.btns}>
          <button className={styles.loginBtn} onClick={navigateToLogin}>
            Login
          </button>
          <button className={styles.registerBtn} onClick={navigateToRegister}>
            Register
          </button>
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.left_section}>
          <h1 className={styles.title}>PKNU Live Coaching</h1>
          <p className={styles.content}>
            여러분 환영합니다. 언제 어디서나 자유롭게 개발할 수 있는
            pknu-live-coaching입니다. 이곳은 홈 화면이고 로그인하시면 사용할 수
            있습니다. 학생과 교수에 따라 다른 환경을 제공합니다. 다들 즐거운
            수업시간이 되시길 바랍니다. 감사합니다.
          </p>
          <button className={styles.startBtn} onClick={navigateToLogin}>
            Get Started
          </button>
        </div>
        <img className={styles.home_img} src="img/homeImg.png" alt="" />
      </section>
    </div>
  );
}
