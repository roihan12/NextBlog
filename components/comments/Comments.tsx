"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

type Props = {
  postSlug: string;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message || "Something went wrong");
    throw error;
  }
  return data;
};

const Comments = ({ postSlug }: Props) => {
  const { status } = useSession();
  const [desc, setDesc] = React.useState("");

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ desc, postSlug }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setDesc("");
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-[50px]">
      <h1 className="text-[24px] font-bold text-secondary mb-[30px]">
        Comments
      </h1>
      {status === "authenticated" ? (
        <div className="flex gap-[30px] items-center justify-between">
          <textarea
            placeholder="Write a comment..."
            className="w-full p-5"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="px-5 py-3 bg-green-800 text-white font-bold border-none rounded cursor-pointer"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href={"/login"}>Login to write a comment</Link>
      )}
      <div className="mt-[50px]">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((comment: any) => (
            <div className="mb-[50px]" key={comment.id}>
              <div className="flex items-center gap-[20px] mb-[20px]">
                {comment.user.image && (
                  <Image
                    src={comment.user.image}
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full h-[50px] w-[50px] object-cover"
                  />
                )}

                <div className="flex flex-col gap-[5px] text-secondary">
                  <span className="text-base font-[500]">
                    {comment.user.name}
                  </span>
                  <span className="text-[14px]">
                    {comment.createdAt.toLocaleString().substring(0, 10)}
                  </span>
                </div>
              </div>
              <p className="text-[18px] font-[300] sm:text-[14px]">
                {comment.desc}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
