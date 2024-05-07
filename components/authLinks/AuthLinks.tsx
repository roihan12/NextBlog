"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const AuthLinks = (props: Props) => {
  const [open, setOpen] = useState(false);

  const status = "nonauthenticated";

  return (
    <>
      {status === "nonauthenticated" ? (
        <Link href={"/login"} className="sm:hidden">
          Login
        </Link>
      ) : (
        <>
          <Link href={"/write"} className="sm:hidden">
            Write
          </Link>
          <span className="cursor-pointer sm:hidden">Logout</span>
        </>
      )}
      <div
        className="w-[20px] h-[16px] flex-col justify-between cursor-pointer hidden sm:flex"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-[2px] bg-black"></div>
        <div className="w-full h-[2px] bg-black"></div>
        <div className="w-full h-[2px] bg-black"></div>
      </div>
      {open && (
        <div className="absolute top-[100px] left-0 bg-primary h-[calc(100%-100px)] w-full flex flex-col items-center justify-center gap-[50px] text-[36px] dark:bg-tertiary">
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          {status === "nonauthenticated" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/write"}>Write</Link>
              <span className="cursor-pointer">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
