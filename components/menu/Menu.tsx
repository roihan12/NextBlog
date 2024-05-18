import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts/popular`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Menu = async () => {
  const popularPost = await getData();

  return (
    <div className="basis-1/4 mt-[50px] lg:hidden">
      <h2 className="text-gray-500 text-[16px] font-normal">{"What's hot"}</h2>
      <h1 className="text-[28px] font-bold">Most Popular</h1>
      {
        popularPost?.map((post: any) => (
          <MenuPosts key={post.id} withImage={false} post={post} />
        ))
      }
      {/* <MenuPosts withImage={false} posts={popularPost} /> */}
      <h2 className="text-gray-500 text-[16px] font-normal">
        Discover by topic
      </h2>
      <h1 className="text-[28px] font-bold">Categories</h1>
      <MenuCategories />
     

    </div>
  );
};

export default Menu;
