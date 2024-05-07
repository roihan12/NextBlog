import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import React from "react";

type Props = {};

const SingleBlogPage = (props: Props) => {
  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="text-[64px] mb-[50px] font-bold xl:text-[48px] sm:text-[32px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-[20px]">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={"/p1.jpeg"}
                alt="blog"
                fill
                className="h-[50px] w-[50px] object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col gap-[5px] text-secondary">
              <span className="text-[20px] font-[500]">John Doe</span>
              <span>11.02.2023</span>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[350px] relative sm:hidden">
          <Image src={"/p1.jpeg"} alt="blog" fill className="object-cover" />
        </div>
      </div>
      <div className="flex gap-[50px]">
        <div className="basis-10/12 mt-[60px] sm:flex-1">
          <div className="text-[18px] font-[300] mb-[20px] sm:text-[14px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolore voluptate veniam cum praesentium vitae inventore ut amet.
              Quasi ipsa facilis cumque officia suscipit recusandae eveniet
              necessitatibus possimus similique officiis dolore sint repellat
              veniam dolorem alias vero dicta voluptates dolorum quod ex, nisi
              cum a culpa nemo. Laboriosam, laborum modi!
            </p>
            <h2 className="text-[28px] font-[600] sm:text-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, excepturi?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolore voluptate veniam cum praesentium vitae inventore ut amet.
              Quasi ipsa facilis cumque officia suscipit recusandae eveniet
              necessitatibus possimus similique officiis dolore sint repellat
              veniam dolorem alias vero dicta voluptates dolorum quod ex, nisi
              cum a culpa nemo. Laboriosam, laborum modi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolore voluptate veniam cum praesentium vitae inventore ut amet.
              Quasi ipsa facilis cumque officia suscipit recusandae eveniet
              necessitatibus possimus similique officiis dolore sint repellat
              veniam dolorem alias vero dicta voluptates dolorum quod ex, nisi
              cum a culpa nemo. Laboriosam, laborum modi!
            </p>
          </div>
          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SingleBlogPage;
