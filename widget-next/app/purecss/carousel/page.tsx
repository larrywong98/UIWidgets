"use client";
import styles from "./page.module.css";
import { useRef } from "react";

var wait: boolean = false;
const throttle = (func: Function, delay: number) => {
  return () => {
    if (wait) {
      return;
    }
    wait = true;
    func();
    setTimeout(() => {
      wait = false;
    }, delay);
  };
};

const Page = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselWidth = 600;
  const scrollTo = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += offset;
    }
    return;
  };
  return (
    <div className={styles["base"]}>
      <div className={styles["carousel"]}>
        <button
          className={styles["carousel-btn"]}
          onClick={() => throttle(() => scrollTo(-carouselWidth), 500)()}
        >
          {"<"}
        </button>
        <div className={styles["carousel-content"]} ref={carouselRef}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
            <p key={value}>{value}</p>
          ))}
        </div>
        <button
          className={styles["carousel-btn"]}
          onClick={() => throttle(() => scrollTo(carouselWidth), 500)()}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
export default Page;
