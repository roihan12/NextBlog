import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  withImage: boolean;
  post?: Post & { user: { name: string; image: string } };
};

const MenuPosts = ({ withImage, post }: Props) => {
  return (
    <div className="flex flex-col gap-[35px] mt-[35px] mb-[60px]">
      <Link href={"/"} className=" flex gap-[20px] items-center" key={post?.id}>
        {withImage && (
          <div className="basis-1/6 aspect-square relative">
            <Image
              src={post?.img!}
              alt="menu"
              fill
              className="object-cover rounded-full border-[3px] border-tertiary"
            />
          </div>
        )}
        <div className="flex flex-col gap-[5px]">
          <span
            className={`py-[2px] px-[8px] ${post?.catSlug} text-white w-max rounded-[10px]`}
          >
            {post?.catSlug}
          </span>
          <h3 className="text-[18px] font-[500] text-secondary">
            {post?.title}
          </h3>
          <div className="text-[12px]">
            <span>{post?.user.name}</span>
            <span className="text-gray-500">
              {" "}
              - {post?.createdAt.toLocaleString().substring(0, 10)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
