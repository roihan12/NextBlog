import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";

type Props = {};

const BlogPage = (props: Props) => {
  return (
    <div>
      <h1 className="bg-orange-500 text-white p-3 text-center">Style Blog</h1>
      <div className="flex gap-[50px]">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
