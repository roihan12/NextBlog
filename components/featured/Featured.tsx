import Image from "next/image";
import React from "react";

type Props = {};

const Featured = (props: Props) => {
  return (
    <div className="mt-[30px]">
      <h1 className="text-[96px] xl:text-[72px] lg:text-[64px] md:text-[48px] sm:text-[36px]">
        <b>Hey, Next Blog here!</b> <br />Discover the latest posts and read here.
      </h1>
      <div className="mt-[60px] flex items-center gap-[50px] sm:block">
        <div className="flex-1 h-[500px] relative">
          <Image src={"/p1.jpeg"} alt="banner" fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-[20px]">
          <h1 className="text-[40px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            autem!
          </h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            autem, quibusdam corrupti officia magni saepe assumenda voluptatem
            amet quos consectetur perspiciatis nihil fugiat magnam obcaecati!
          </p>
          <button className="pt-4 pb-5 dark:bg-white border-none rounded w-[200px] dark:text-primary bg-tertiary text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
