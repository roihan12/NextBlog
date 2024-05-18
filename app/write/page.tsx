"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { upload } from "@/utils/uploadImage";
import { htmlToMarkdown, markdownToHtml } from "@/utils/parser";

export interface EditorContentChanged {
  html: string;
  markdown: string;
}

export interface EditorProps {
  value?: string;
  onChange?: (changes: EditorContentChanged) => void;
}

const WritePage:FC<EditorProps> = (props) => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");
  const [value, setValue] = React.useState<string>(
    markdownToHtml(props.value || "")
  );
  const [file, setFile] = React.useState<File>();
  const [media, setMedia] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [catSlug, setCatSlug] = React.useState<string>("");
  const reactQuillRef = React.useRef<ReactQuill>(null);

  const onChange = (content: string) => {
    setValue(content);

    if (props.onChange) {
      props.onChange({
        html: content,
        markdown: htmlToMarkdown(content),
      });
    }
  };
  const imageHandler = React.useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        const file = input.files[0];
        const url = await upload(file);
        console.log("usrl", url);
        const quill = reactQuillRef.current;
        if (quill) {
          const range = quill.getEditorSelection();
          range && quill.getEditor().insertEmbed(range.index, "image", url);
        }

        setMedia(url);
      }
    };
  }, []);

  // useEffect(() => {
  //   const upload = () => {
  //     const fileName = new Date().getTime() + file?.name!;
  //     const storageRef = ref(storage, fileName);
  //     const uploadTask = uploadBytesResumable(storageRef, file!);
  //   };

  //   file && upload();
  // }, [file]);

  const slugify = (str: string) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };
  const handleSubmit = async () => {
    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        className="p-[50px] text-[64px] border-none outline-none bg-transparent"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="mb-[50px] py-[10px] px-[20px] ml-[50px] w-max"
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex gap-[20px] h-[700px]  relative">
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
          <div className="flex gap-[20px] absolute z-[999]  left-12 bg-secondary w-max  dark:bg-tertiary">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files![0])}
              style={{ display: "none" }}
            />
            <button className="w-[36px] h-[36px] rounded-full bg-transparent border flex items-center justify-center cursor-pointer border-[#1a8917]">
              <label htmlFor="image">
                <Image
                  src={"/image.png"}
                  alt="profile"
                  width={16}
                  height={16}
                />
              </label>
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
          ref={reactQuillRef}
          theme="snow"
          placeholder="Start writing..."
          modules={{
            toolbar: {
              container: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["link", "image", "video"],
                ["code-block"],
                ["clean"],
              ],
              handlers: {
                image: imageHandler,
              },
            },
            clipboard: {
              matchVisual: false,
            },
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
            "code-block",
          ]}
          value={value}
          onChange={onChange}
        />
      </div>
      <button
        className="absolute top-[30px] right-[20px] px-2 py-1 bg-[#1a8917] text-white cursor-pointer rounded"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
