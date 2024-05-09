import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const CategoryList = async () => {
  const data: Category[] = await getData();
  return (
    <div>
      <h1 className="my-[50px] text-[32px] font-bold">Popular Categories</h1>
      <div className="flex gap-[20px] flex-wrap justify-between">
        {data &&
          data?.map((category) => (
            <Link
              key={category.id}
              href={`/blog?category=${category.slug}`}
              className={`category ${[category.title]}`}
            >
              {category.img && (
                <Image
                  src={category.img || ""}
                  alt={category.title}
                  width={32}
                  height={32}
                  className="rounded-full w-8 h-8"
                />
              )}
              {category.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
