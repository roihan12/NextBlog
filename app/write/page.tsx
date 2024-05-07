"use client";
import Image from "next/image";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

type Props = {};

const WritePage = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        className="p-[50px] text-[64px] border-none outline-none bg-transparent"
      />
      <div className="flex gap-[20px] h-[700px] relative">
        <button className="w-[36px] h-[36px] rounded-full bg-transparent border flex items-center justify-center cursor-pointer">
          <Image
            src={"/plus.png"}
            alt="profile"
            width={16}
            height={16}
            onClick={() => setOpen(!open)}
          />
        </button>
        {open && (
          <div className="flex gap-[20px] bg-tertiary absolute z-[999] w-full left-12">
            <button className="w-[36px] h-[36px] rounded-full bg-transparent border flex items-center justify-center cursor-pointer border-[#1a8917]">
              <Image src={"/image.png"} alt="profile" width={16} height={16} />
            </button>
            <button className="w-[36px] h-[36px] rounded-full bg-transparent border flex items-center justify-center cursor-pointer border-[#1a8917]">
              <Image
                src={"/external.png"}
                alt="profile"
                width={16}
                height={16}
              />
            </button>
            <button className="w-[36px] h-[36px] rounded-full bg-transparent border flex items-center justify-center cursor-pointer border-[#1a8917]">
              <Image src={"/video.png"} alt="profile" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Write a post.."
        />
      </div>
      <button className="absolute top-[30px] right-[20px] px-2 py-1 bg-[#1a8917] text-white cursor-pointer rounded">Publish</button>
    </div>
  );
};

export default WritePage;
