import React from "react";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { Post } from "@prisma/client";

type Props = {
  page?: number;
  category?: string;
};
const getData = async (page: number, category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&category=${category || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const CardList = async ({ page, category }: Props) => {
  const { posts, count } = await getData(page!, category!);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page! - 1) > 0;
  const hasNext = POST_PER_PAGE * (page! - 1) + POST_PER_PAGE < count;


  return (
    <div className="basis-9/12 md:flex-1 lg:flex-1">
      <h1 className="my-[50px] text-[32px] font-bold">Recent Posts</h1>
      <div>
        {posts?.map((post: Post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination page={page!} hasNext={hasNext} hasPrevious={hasPrev} />
    </div>
  );
};

export default CardList;
