import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="flex flex-1 gap-[10px]">
        <Image src={"/facebook.png"} alt="logo" width={24} height={24} />
        <Image src={"/instagram.png"} alt="logo" width={24} height={24} />
        <Image src={"/tiktok.png"} alt="logo" width={24} height={24} />
        <Image src={"/youtube.png"} alt="logo" width={24} height={24} />
      </div>
      <div className="flex-1 text-center text-4xl font-bold">NextBlog</div>
      <div className="flex flex-1 gap-[20px]">
        <ThemeToggle />
        <Link href={"/"}>Homepage</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/about"}>About</Link>
        <AuthLinks  />
      </div>
    </div>
  );
};

export default Navbar;
