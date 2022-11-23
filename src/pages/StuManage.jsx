import React from "react";
import styles from "../components/StuManage.module.css";
import { GiTeacher } from "react-icons/gi";
import StuSeat from "../components/StuSeat";
import { useNavigate } from "react-router-dom";

export default function StuManage() {
  // 일단은 Exit 버튼을 클릭하면 Home 화면으로 돌아가도록 설정했습니다.
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={styles.stnManage_upper}>
        <GiTeacher className={styles.icon} />
        <h1 className={styles.stnManage_title}>pknu-live-coaching</h1>
        <button className={styles.editBtn} onClick={navigateToHome}>
          Exit
        </button>
      </div>
      <div className={styles.stuList}>
        <div className={styles.stuItems1}>
          <StuSeat />
          <StuSeat />
          <StuSeat />
          <StuSeat />
        </div>
        <div className={styles.stuItems2}>
          <StuSeat />
          <StuSeat />
          <StuSeat />
          <StuSeat />
        </div>
        <div className={styles.stuItems3}>
          <StuSeat />
          <StuSeat />
          <StuSeat />
          <StuSeat />
        </div>
        <div className={styles.stuItems4}>
          <StuSeat />
          <StuSeat />
          <StuSeat />
          <StuSeat />
        </div>
      </div>
    </div>
  );
}
