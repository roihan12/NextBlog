import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-[50px] flex justify-between items-center text-secondary py-5 md:flex-col md:gap-[30px]">
      <div className="flex flex-1 flex-col gap-[14px]">
        <div className="flex gap-[10px] items-center">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <h1 className="text-[24px]">NextBlog</h1>
        </div>
        <p className="font-[300]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          mollitia commodi culpa. Ab corrupti tempore nesciunt, exercitationem
          id quidem hic sint placeat esse reiciendis assumenda, vel blanditiis?
          Voluptate labore placeat.
        </p>
        <div className="mt-[10px] flex gap-[10px]">
          <Image src={"/facebook.png"} alt="logo" width={18} height={18} />
          <Image src={"/instagram.png"} alt="logo" width={18} height={18} />
          <Image src={"/tiktok.png"} alt="logo" width={18} height={18} />
          <Image src={"/youtube.png"} alt="logo" width={18} height={18} />
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-[100px] lg:gap-[50px] md:w-full md:justify-between sm:text-[14px]">
        <div className="flex flex-col gap-[10px] font-[300]">
          <span className="font-bold">Links</span>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-[300]">
          <span className="font-bold">Tags</span>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Travel</Link>
          <Link href={"/"}>Food</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-[300]">
          <span className="font-bold">Social</span>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>Tiktok</Link>
          <Link href={"/"}>Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
