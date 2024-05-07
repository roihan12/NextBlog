import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const CategoryList = (props: Props) => {
  return (
    <div>
      <h1 className="my-[50px] text-[32px] font-bold">Popular Categories</h1>
      <div className="flex gap-[20px] flex-wrap justify-between">
        <Link
          href={"/blog?category=style"}
          className="flex items-center gap-[10px] capitalize bg-[#57c4ff31] w-[15%] h-[80px] justify-center rounded-[10px] xl:w-[20%] lg:w-[25%] md:w-[45%] sm:w-full"
        >
          <Image
            src={"/style.png"}
            alt="style"
            width={32}
            height={32}
            className="rounded-full w-8 h-8"
          />
          style
        </Link>
        <Link
          href={"/blog?category=style"}
          className="flex items-center gap-[10px] capitalize bg-[#da85c731] w-[15%] h-[80px] justify-center rounded-[10px] xl:w-[20%] lg:w-[25%] md:w-[45%] sm:w-full"
        >
          <Image
            src={"/fashion.png"}
            alt="fashion"
            width={32}
            height={32}
            className="rounded-full w-8 h-8"
          />
          fashion
        </Link>
        <Link
          href={"/blog?category=style"}
          className="flex items-center gap-[10px] capitalize bg-[#7fb88133] w-[15%] h-[80px] justify-center rounded-[10px] xl:w-[20%] lg:w-[25%] md:w-[45%] sm:w-full"
        >
          <Image
            src={"/food.png"}
            alt="food"
            width={32}
            height={32}
            className="rounded-full w-8 h-8"
          />
          food
        </Link>
        <Link
          href={"/blog?category=style"}
          className="flex items-center gap-[10px] capitalize bg-[#ff795736] w-[15%] h-[80px] justify-center rounded-[10px] xl:w-[20%] lg:w-[25%] md:w-[45%] sm:w-full"
        >
          <Image
            src={"/travel.png"}
            alt="food"
            width={32}
            height={32}
            className="rounded-full w-8 h-8"
          />
          travel
        </Link>
        <Link
          href={"/blog?category=style"}
          className="flex items-center gap-[10px] capitalize bg-[#ffb04f45] w-[15%] h-[80px] justify-center rounded-[10px] xl:w-[20%] lg:w-[25%] md:w-[45%] sm:w-full"
        >
          <Image
            src={"/culture.png"}
            alt="culture"
            width={32}
            height={32}
            className="rounded-full w-8 h-8"
          />
          culture
        </Link>
        <Link
          href={"/blog?category=style"}
          className="flex items-center gap-[10px] capitalize bg-[#5e4fff31] w-[15%] h-[80px] justify-center rounded-[10px] xl:w-[20%] lg:w-[25%] md:w-[45%] sm:w-full"
        >
          <Image
            src={"/coding.png"}
            alt="coding"
            width={32}
            height={32}
            className="rounded-full w-8 h-8"
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
