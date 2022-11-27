import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../components/RoomEnter.module.css";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function RoomEnter() {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, password);
  };

  return (
    <>
      <Navbar>
        <Link to="/">
          <Button name="Logout"></Button>
        </Link>
      </Navbar>
      <section className={styles.section}>
        <img className={styles.image} src="img/whale.jpeg" alt="noImage" />
        <form className={styles.roomInfo_form} onSubmit={handleSubmit}>
          <label htmlFor="roomTitle">입장할 방 이름</label>
          <input
            type="text"
            name="roomTitle"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label htmlFor="roomNum">입장할 방 비밀번호</label>
          <input
            type="password"
            name="roomNum"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className={styles.enter_btn} type="submit">
            입장하기
          </button>
        </form>
      </section>
    </>
  );
}
