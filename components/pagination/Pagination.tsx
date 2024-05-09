"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  page: number;
  hasPrevious?: boolean;
  hasNext?: boolean;
};

const Pagination = ({ page, hasNext, hasPrevious }: Props) => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <button
        disabled={!hasPrevious}
        className={`w-[100px] border-none p-4 ${
          !hasPrevious
            ? "cursor-not-allowed bg-red-300"
            : "cursor-pointer  bg-red-500"
        } bg-red-500 text-white`}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={`w-[100px] border-none p-4 ${
          !hasNext
            ? "cursor-not-allowed bg-red-300"
            : "cursor-pointer  bg-red-500"
        } bg-red-500 text-white`}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
