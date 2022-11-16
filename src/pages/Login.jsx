import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../components/Login.module.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
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
            onChange={handleChange}
            value={form.email}
          />
          <input
            className={styles.password}
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
          />
          <button className={styles.login_btn}>LOGIN</button>
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
