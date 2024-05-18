import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";

const BlogPage = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    category?: string;
  };
}) => {
  const currentPage = Number(searchParams?.page) || 1;
  const category = searchParams?.category;
  return (
    <div>
      <h1 className="bg-orange-500 text-white p-3 text-center uppercase">
        {category} Blog
      </h1>
      <div className="flex gap-[50px]">
        <CardList page={currentPage} category={category} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
