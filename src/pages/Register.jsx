import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../components/Register.module.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    password_confirm: "",
    name: "",
    belong: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className={styles.register_page}>
      <div className={styles.img}>
        <img src="img/image.png" alt="ddd" />
      </div>
      <div className={styles.control_box}>
        <h1 className={styles.title1}>pknu</h1>
        <h1 className={styles.title2}>live-coaching</h1>
        <form className={styles.register_form}>
          <input
            className={styles.email}
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            className={styles.password}
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <input
            className={styles.password_confirm}
            type="password"
            placeholder="Password confirm"
            name="password_confirm"
            value={form.password_confirm}
            onChange={handleChange}
          />
          <input
            className={styles.name}
            type="text"
            placeholder="Full name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            className={styles.belong}
            type="text"
            placeholder="Belong"
            name="belong"
            value={form.belong}
            onChange={handleChange}
          />
          <button className={styles.register_btn} onSubmit={handleSubmit}>
            LOGIN
          </button>
        </form>
        <div className={styles.login_comment}>
          <span>Already have an account? </span>
          <Link className={styles.link} to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
