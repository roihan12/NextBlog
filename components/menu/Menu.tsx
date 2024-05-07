import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="basis-1/4 mt-[50px]">
      <h2 className="text-gray-500 text-[16px] font-normal">{"What's hot"}</h2>
      <h1 className="text-[28px]">Most Popular</h1>
      <div>
        <Link href={"/"} className=" flex gap-[20px] items-center">
          <div className="basis-1/6 aspect-square relative">
            <Image
              src={"/p1.jpeg"}
              alt="menu"
              fill
              className="object-cover rounded-full border-[3px] border-tertiary"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <span className="py-[3px] px-[8px] bg-[#ff7857] text-white w-max rounded-[10px]">
              Travel
            </span>
            <h3 className="text-[18px] font-[500] text-secondary">
              Lorem ipsum dolor sit amet
            </h3>
            <div className="text-[12px]">
              <span>John Doe</span>
              <span className="text-gray-500"> - 11.02.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
