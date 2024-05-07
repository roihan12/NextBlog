import React from "react";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

type Props = {};

const CardList = (props: Props) => {
  return (
    <div className="basis-9/12">
      <h1 className="my-[50px] text-[32px] font-bold">Recent Posts</h1>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
