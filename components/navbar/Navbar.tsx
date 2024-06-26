import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="flex flex-1 gap-[10px] lg:hidden">
        <Image src={"/facebook.png"} alt="logo" width={24} height={24} />
        <Image src={"/instagram.png"} alt="logo" width={24} height={24} />
        <Image src={"/tiktok.png"} alt="logo" width={24} height={24} />
        <Image src={"/youtube.png"} alt="logo" width={24} height={24} />
      </div>
      <Link href={"/"} className="flex-1 text-center text-4xl font-bold xl:text-[32px] lg:text-left md:text-[24px]">
        NextBlog
      </Link>
      <div className="flex flex-1 gap-[20px] items-center xl:text-[18px] xl:gap-[15px] sm:justify-end">
        <ThemeToggle />
        <Link href={"/"} className="sm:hidden">
          Homepage
        </Link>
        <Link href={"/contact"} className="sm:hidden">
          Contact
        </Link>
        <Link href={"/about"} className="sm:hidden">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
