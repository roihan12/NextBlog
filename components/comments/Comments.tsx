import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Comments = (props: Props) => {
  const status = "authenticated";
  return (
    <div className="mt-[50px]">
      <h1 className="text-[24px] font-bold text-secondary mb-[30px]">
        Comments
      </h1>
      {status === "authenticated" ? (
        <div className="flex gap-[30px] items-center justify-between">
          <textarea placeholder="Write a comment..." className="w-full p-5" />
          <button className="px-5 py-3 bg-green-800 text-white font-bold border-none rounded cursor-pointer">
            Send
          </button>
        </div>
      ) : (
        <Link href={"/login"}>Login to write a comment</Link>
      )}
      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <Image
              src={"/p1.jpeg"}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full h-[50px] w-[50px] object-cover"
            />
            <div className="flex flex-col gap-[5px] text-secondary">
              <span className="text-base font-[500]">John Doe</span>
              <span className="text-[14px]">11.02.2023</span>
            </div>
          </div>
          <p className="text-[18px] font-[300] sm:text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            laudantium!
          </p>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <Image
              src={"/p1.jpeg"}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full h-[50px] w-[50px] object-cover"
            />
            <div className="flex flex-col gap-[5px] text-secondary">
              <span className="text-base font-[500]">John Doe</span>
              <span className="text-[14px]">11.02.2023</span>
            </div>
          </div>
          <p className="text-[18px] font-[300] sm:text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            laudantium!
          </p>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <Image
              src={"/p1.jpeg"}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full h-[50px] w-[50px] object-cover"
            />
            <div className="flex flex-col gap-[5px] text-secondary">
              <span className="text-base font-[500]">John Doe</span>
              <span className="text-[14px]">11.02.2023</span>
            </div>
          </div>
          <p className="text-[18px] font-[300] sm:text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            laudantium!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
