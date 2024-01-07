"use client";
import styles from "./page.module.css";
import { useRef } from "react";
const Page = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = () => {
    if (ref.current) {
      ref.current.scrollLeft = 100;
    }
  };
  return (
    <div>
      <div className={styles["controller"]}>
        <button onClick={scroll}></button>
        <button></button>
        <button></button>
      </div>
      <div className={styles["carousel2"]} ref={ref}>
        <div className={styles["purple"] + " " + styles["background"]}></div>
        <div className={styles["blue"] + " " + styles["background"]}></div>
        <div className={styles["green"] + " " + styles["background"]}></div>
      </div>
    </div>
  );
};
export default Page;
