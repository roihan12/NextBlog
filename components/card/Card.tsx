import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};

const Card = ({ post }: Props) => {
  return (
    <div className="mb-[50px] flex items-center gap-[50px]">
      {post.img && (
        <div className="flex-1 h-[350px] relative xl:hidden">
          <Image src={`${post.img}`} alt="blog" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-[30px]">
        <div>
          <span className="text-gray-500">
            {post.createdAt.toString().substring(0, 10)} -{" "}
          </span>
          <span className="text-red-500 font-semibold uppercase">
            {post.catSlug}
          </span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1 className="text-[32px] font-bold">{post.title}</h1>
        </Link>
        <div
          className="text-[18px] font-normal text-secondary"
          dangerouslySetInnerHTML={{ __html: post?.desc.substring(0, 60) }}
        />

        <Link
          href={`/posts/${post.slug}`}
          className="border-b-[1px] w-max py-[2px]"
        >
          {" "}
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
