import { FunctionComponent } from "react";
import styles from "./css/FrameComponent1.module.css";

export const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <textarea className={styles.frameTextarea} />
      <div className={styles.frameDiv1} />
      <textarea className={styles.frameTextarea1} />
      <div className={styles.frameDiv2} />
      <div className={styles.frameDiv3} />
      <div className={styles.frameDiv4} />
    </div>
  );
};
