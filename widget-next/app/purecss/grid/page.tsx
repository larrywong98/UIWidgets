import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={styles["base"]}>
      <div className={styles["grid-1"]}>
        <div className={styles["grid-1-sub"]}>a</div>
        <div className={styles["grid-1-sub"]}>b</div>
        <div className={styles["grid-1-sub"]}>c</div>
        <div className={styles["grid-1-sub"]}>d</div>
        <div className={styles["grid-1-sub"]}>e</div>
        <div className={styles["grid-1-sub"]}>f</div>
      </div>
      <div className={styles["grid-2"]}>
        <div className={styles["grid-2-sub"]}>a</div>
        <div className={styles["grid-2-sub"]}>b</div>
        <div className={styles["grid-2-sub"]}>c</div>
        <div className={styles["grid-2-sub"]}>d</div>
        <div className={styles["grid-2-sub"] + " " + styles["grid-2-lastone"]}>
          e
        </div>
      </div>
      <div className={styles["grid-3"]}>
        <div className={styles["grid-3-sub"] + " " + styles["grid-3-firstone"]}>
          a
        </div>
        <div className={styles["grid-3-sub"]}>b</div>
        <div className={styles["grid-3-sub"]}>c</div>
      </div>
    </div>
  );
};
export default Page;
