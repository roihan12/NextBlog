import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import { Post } from "@prisma/client";
import Image from "next/image";
import React from "react";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const post: Post & { user: { name: string; image: string } } = await getData(
    params.slug
  );
  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="text-[64px] mb-[50px] font-bold xl:text-[48px] sm:text-[32px]">
            {post.title}
          </h1>
          <div className="flex items-center gap-[20px]">
            {post.user.image && (
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src={post.user.image}
                  alt="blog"
                  fill
                  className="h-[50px] w-[50px] object-cover rounded-full"
                />
              </div>
            )}
            <div className="flex flex-col gap-[5px] text-secondary">
              <span className="text-[20px] font-[500]">{post?.user.name}</span>
              <span>{post.createdAt.toLocaleString().substring(0, 10)}</span>
            </div>
          </div>
        </div>
        {post.img && (
          <div className="flex-1 h-[350px] relative sm:hidden">
            <Image src={post.img} alt="blog" fill className="object-cover" />
          </div>
        )}
      </div>
      <div className="flex gap-[50px]">
        <div className="basis-10/12 mt-[60px] sm:flex-1">
          <div
            className="text-[18px] font-[300] mb-[20px] sm:text-[14px]"
            dangerouslySetInnerHTML={{ __html: post.desc }}
          />
          <div>
            <Comments postSlug={params.slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SingleBlogPage;
