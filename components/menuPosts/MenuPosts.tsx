import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  withImage: boolean;
};

const MenuPosts = ({ withImage }: Props) => {
  return (
    <div className="flex flex-col gap-[35px] mt-[35px] mb-[60px]">
      <Link href={"/"} className=" flex gap-[20px] items-center">
        {withImage && (
          <div className="basis-1/6 aspect-square relative">
            <Image
              src={"/p1.jpeg"}
              alt="menu"
              fill
              className="object-cover rounded-full border-[3px] border-tertiary"
            />
          </div>
        )}
        <div className="flex flex-col gap-[5px]">
          <span className="py-[2px] px-[8px] bg-[#ff7857] text-white w-max rounded-[10px]">
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
      <Link href={"/"} className=" flex gap-[20px] items-center">
        {withImage && (
          <div className="basis-1/6 aspect-square relative">
            <Image
              src={"/p1.jpeg"}
              alt="menu"
              fill
              className="object-cover rounded-full border-[3px] border-tertiary"
            />
          </div>
        )}
        <div className="flex flex-col gap-[5px]">
          <span className="py-[2px] px-[8px] bg-[#ffb14f] text-white w-max rounded-[10px]">
            Culture
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
      <Link href={"/"} className=" flex gap-[20px] items-center">
        {withImage && (
          <div className="basis-1/6 aspect-square relative">
            <Image
              src={"/p1.jpeg"}
              alt="menu"
              fill
              className="object-cover rounded-full border-[3px] border-tertiary"
            />
          </div>
        )}
        <div className="flex flex-col gap-[5px]">
          <span className="py-[2px] px-[8px] bg-[#7fb881] text-white w-max rounded-[10px]">
            Food
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
      <Link href={"/"} className=" flex gap-[20px] items-center">
        {withImage && (
          <div className="basis-1/6 aspect-square relative">
            <Image
              src={"/p1.jpeg"}
              alt="menu"
              fill
              className="object-cover rounded-full border-[3px] border-tertiary"
            />
          </div>
        )}
        <div className="flex flex-col gap-[5px]">
          <span className="py-[2px] px-[8px] bg-[#ff7887] text-white w-max rounded-[10px]">
            Fashion
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
      <Link href={"/"} className=" flex gap-[20px] items-center">
        {withImage && (
          <div className="basis-1/6 aspect-square relative">
            <Image
              src={"/p1.jpeg"}
              alt="menu"
              fill
              className="object-cover rounded-full border-[3px] border-tertiary"
            />
          </div>
        )}
        <div className="flex flex-col gap-[5px]">
          <span className="py-[2px] px-[8px] bg-[#775aec] text-white w-max rounded-[10px]">
            Coding
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
      <Link href={"/"} className=" flex gap-[20px] items-center">
        {withImage && (
          <div className="basis-1/6 aspect-square relative">
            <Image
              src={"/p1.jpeg"}
              alt="menu"
              fill
              className="object-cover rounded-full border-[3px] border-tertiary"
            />
          </div>
        )}
        <div className="flex flex-col gap-[5px]">
          <span className="py-[2px] px-[8px] bg-[#789cff] text-white w-max rounded-[10px]">
            Style
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
  );
};

export default MenuPosts;
