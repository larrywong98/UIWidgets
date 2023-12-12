import styles from "./page.module.css";
const Page = () => {
  return (
    <div className={styles["base"]}>
      <div className={styles["balls-frame"]}>
        <div className={styles["balls"]}>
          <div className={styles["ball"] + " " + styles["ball-1"]}></div>
          <div className={styles["ball"]}></div>
          <div className={styles["ball"]}></div>
          <div className={styles["ball"]}></div>
          <div className={styles["ball"] + " " + styles["ball-5"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
