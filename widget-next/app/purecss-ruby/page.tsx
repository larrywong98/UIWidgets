import styles from "./page.module.css";
const Page = () => {
  return (
    <div className={styles["base"]}>
      <div className={styles["ruby"]}>
        <div className={styles["one"]}></div>
        <div className={styles["two"]}> </div>
        <div className={styles["three"]}> </div>
        <div className={styles["four"]}>
          <div className={styles["flash-box"]}>
            <div className={styles["flash"]}></div>
          </div>
        </div>
        <div className={styles["five"]}> </div>
        <div className={styles["six"]}> </div>
        <div className={styles["seven"]}> </div>
        <div className={styles["eight"]}> </div>
      </div>
    </div>
  );
};
export default Page;
