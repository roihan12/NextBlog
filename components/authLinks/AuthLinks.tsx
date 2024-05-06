import Link from "next/link";
import React from "react";

type Props = {};

const AuthLinks = (props: Props) => {
  const status = "authenticated";

  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link href={"/write"}>Write</Link>
          <span className="cursor-pointer">Logout</span>
        </>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </>
  );
};

export default AuthLinks;
