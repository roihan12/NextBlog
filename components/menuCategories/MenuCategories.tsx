import Link from "next/link";
import React from "react";

type Props = {};

const MenuCategories = (props: Props) => {
  return (
    <div className="mt-[35px] mb-[60px] flex flex-wrap gap-[20px]">
      <Link
        href={"/blog?category=style"}
        className="px-5 py-2 text-[14px] rounded-[10px] bg-[#57c4ff31]"
      >
        Style
      </Link>
      <Link
        href={"/blog?category=food"}
        className="px-5 py-2 text-[14px] rounded-[10px] bg-[#7fb88133]"
      >
        Food
      </Link>
      <Link
        href={"/blog?category=fashion"}
        className="px-5 py-2 text-[14px] rounded-[10px] bg-[#da85c731]"
      >
        Fashion
      </Link>
      <Link
        href={"/blog?category=travel"}
        className="px-5 py-2 text-[14px] rounded-[10px] bg-[#ff795736]"
      >
        Travel
      </Link>
      <Link
        href={"/blog?category=culture"}
        className="px-5 py-2 text-[14px] rounded-[10px] bg-[#ffb04f45]"
      >
        Culture
      </Link>
      <Link
        href={"/blog?category=culture"}
        className="px-5 py-2 text-[14px] rounded-[10px] bg-[#5e4fff31]"
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
