import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../components/RoomMake.module.css";

export default function RoomEnter() {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, password);
  };

  return (
    <div className={styles.roomMake_page}>
      <div className={styles.img}>
        <img src="img/whale.jpeg" alt="ddd" />
      </div>
      <form className={styles.roomMake_form} onSubmit={handleSubmit}>
        <label htmlFor="roomTitle">생성할 방 이름</label>
        <input
          type="text"
          name="roomTitle"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label htmlFor="roomNum">생성할 방 비밀번호</label>
        <input
          type="password"
          name="roomNum"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className={styles.make_btn} type="submit">
          생성하기
        </button>
      </form>
    </div>
  );
}