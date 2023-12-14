"use client";
import { useState } from "react";

const debounce = (func: Function, delay: number) => {
  var timerId: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func();
    }, delay);
  };
};
const Page = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{ backgroundColor: "#bbbbbb" }}
          onClick={() => debounce(() => setValue(value + 1), 1000)()}
        >
          Add one
        </button>
        <p>{value}</p>
      </div>
    </>
  );
};
export default Page;
