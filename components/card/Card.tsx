import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="mb-[50px] flex items-center gap-[50px]">
      <div className="flex-1 h-[350px] relative">
        <Image src={"/p1.jpeg"} alt="blog" fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-[30px]">
        <div>
          <span className="text-gray-500">11.02.2023 - </span>
          <span className="text-red-500 font-semibold">CULTURE</span>
        </div>
        <Link href={"/"}>
          <h1 className="text-[32px] font-bold">What is Lorem Ipsum?</h1>
        </Link>
        <p className="text-[18px] font-normal text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ex
          ratione asperiores dolorum magnam reiciendis iure iste explicabo
          dolore, praesentium eligendi cum unde sunt quibusdam impedit omnis
          obcaecati eius! Adipisci...
        </p>
        <Link href={"/"} className="border-b-[1px] w-max py-[2px]">
          {" "}
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
