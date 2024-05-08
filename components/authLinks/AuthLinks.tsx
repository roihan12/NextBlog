"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const AuthLinks = (props: Props) => {
  const [open, setOpen] = useState(false);

  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <>
      {status !== "authenticated" ? (
        <Link href={"/login"} className="sm:hidden">
          Login
        </Link>
      ) : (
        <>
          <Link href={"/write"} className="sm:hidden">
            Write
          </Link>
          <span className="cursor-pointer sm:hidden" onClick={() => signOut()}>
            Logout
          </span>
        </>
      )}
      <div
        className="w-[20px] h-[16px] flex-col justify-between cursor-pointer hidden sm:flex"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-[2px] bg-black dark:bg-white"></div>
        <div className="w-full h-[2px] bg-black dark:bg-white"></div>
        <div className="w-full h-[2px] bg-black dark:bg-white"></div>
      </div>
      {open && (
        <div className="absolute top-[100px] left-0 bg-primary h-[calc(100%-100px)] w-full flex flex-col items-center justify-center gap-[50px] text-[36px] dark:bg-tertiary">
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          {status !== "authenticated" ? (
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
