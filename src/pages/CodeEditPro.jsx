import CodeEditor from "@uiw/react-textarea-code-editor";
import React, { useState } from "react";
import styles from "../components/CodeEditPro.module.css";
import { useNavigate } from "react-router-dom";

export default function CodeEditPro() {
  const [code, setCode] = React.useState(
    `#include <stdio.h>\n\nmain() {\n printf("Hello World");\n}`
  );
  // 클릭 시 순서가 반대로 나와야 하는데 (기본이 false이므로 클릭 시 isCheck가 true) 잘 안되네요... 일단 이렇게 클릭한지 안한지 알 수 있게 이렇게 해놓았습니다.
  const [isCheck, setIsCheck] = useState(false);
  const changeCheck = () => {
    setIsCheck((Check) => !Check);
    console.log(isCheck);
  };

  const navigate = useNavigate();
  const navigateToStuManage = () => {
    navigate("/stuManage");
  };
  return (
    <div>
      <div className={styles.codeEditPro_upper}>
        <span>신인철 교수님 환영합니다. 학생 01 김강산님의 화면입니다.</span>
        <button className={styles.editBtn} onClick={navigateToStuManage}>
          Exit
        </button>
      </div>
      <CodeEditor
        value={code}
        language="c"
        placeholder="Please enter C code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          height: "600px",
          marginLeft: "20px",
          marginRight: "20px",
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
      <div className={styles.checkDiv}>
        <label htmlFor="checkbox">코드 작성 중 여부</label>
        <input
          type="checkbox"
          name="checkbox"
          className={styles.checkbox}
          onClick={changeCheck}
        />
      </div>
      <div className={styles.output}>
        <span className={styles.outputRes}>
          이곳은 코드 결과 출력 창입니다.
        </span>
      </div>
    </div>
  );
}