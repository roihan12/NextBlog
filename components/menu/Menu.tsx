import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="basis-1/4 mt-[50px] lg:hidden">
      <h2 className="text-gray-500 text-[16px] font-normal">{"What's hot"}</h2>
      <h1 className="text-[28px] font-bold">Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="text-gray-500 text-[16px] font-normal">
        Discover by topic
      </h2>
      <h1 className="text-[28px] font-bold">Categories</h1>
      <MenuCategories />
      <h2 className="text-gray-500 text-[16px] font-normal">
        Chosen by the editor
      </h2>
      <h1 className="text-[28px] font-bold">Editor Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
