import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../components/Login.module.css";
import { auth } from "../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("　");

  const login = async () => {
    try {
      setErrorMsg("　");
      const user = await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      console.log(user);
    } catch (err) {
      //console.log(err.code);
      switch (err.code) {
        case "auth/weak-password":
          setErrorMsg("비밀번호는 6자리 이상이어야 합니다");
          break;
        case "auth/invalid-email":
          setErrorMsg("잘못된 이메일 주소입니다");
          break;
        case "auth/email-already-in-use":
          setErrorMsg("이미 가입되어 있는 계정입니다");
          break;
        default:
          setErrorMsg("다시 입력하세요");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.img}>
        <img src="img/image.png" alt="ddd" />
      </div>
      <div className={styles.control_box}>
        <h1 className={styles.title1}>pknu</h1>
        <h1 className={styles.title2}>live-coaching</h1>

        <form className={styles.login_form} onSubmit={handleSubmit}>
          <input
            className={styles.email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className={styles.password}
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className={styles.login_btn} onClick={login}>
            LOGIN
          </button>
          <span>{errorMsg}</span>
        </form>
        <div className={styles.login_comment}>
          <span>Don't have an account? </span>
          <Link className={styles.link} to="/register">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
