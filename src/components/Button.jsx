import React from "react";
import styles from "./Button.module.css";

export default function Button({ name }) {
  return <button className={styles.button}>{name}</button>;
}
