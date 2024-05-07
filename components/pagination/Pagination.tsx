import React from "react";

type Props = {};

const Pagination = (props: Props) => {
  return (
    <div className="flex justify-between">
      <button className="w-[100px] border-none p-4 bg-red-500 text-white cursor-pointer">
        Previous
      </button>
      <button className="w-[100px] border-none p-4 bg-red-500 text-white cursor-pointer">
        Next
      </button>
    </div>
  );
};

export default Pagination;
