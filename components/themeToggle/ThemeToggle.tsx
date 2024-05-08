"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useContext } from "react";

type Props = {};

const ThemeToggle = (props: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="w-10 h-5 rounded-full flex items-center justify-between cursor-pointer  relative"
      style={
        theme === "dark" ? { background: "white" } : { background: "#0f172a" }
      }
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <Image src={"/moon.png"} alt="moon" width={14} height={14} />
      <div
        className="absolute w-[15px] h-[15px] rounded-full left-[1px]"
        style={
          theme === "dark"
            ? { left: "24px", background: "#0f172a" }
            : { right: "1px", background: "#f0f0f0" }
        }
      ></div>
      <Image src={"/sun.png"} alt="moon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
