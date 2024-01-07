import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="basis-1/4">01</div>
      <div className="basis-1/2">02</div>
      <div className="basis-1">03</div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
    </div>
  );
}
