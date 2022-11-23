import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StuSeat.module.css";

export default function StuSeat() {
  const navigate = useNavigate();
  const naviagteToCodeEdit = () => {
    navigate("/codeEditPro");
  };
  return (
    <button onClick={naviagteToCodeEdit}>
      <div className={styles.stuSeat}>
        <div className={styles.stuSeat_upper}>
          <span className={styles.stuNum}>01</span>
          <div className={styles.stuAtt}></div>
        </div>
        <p className={styles.stuSeat_lower}>김강산</p>
      </div>
    </button>
  );
}
