import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="flex justify-center items-center mt-[60px]">
      <div className="bg-secondary py-[100px] px-[200px] flex flex-col gap-[50px] rounded-[10px] dark:bg-gray-700 md:py-[50px] md:px-[100px] sm:p-[30px] text-white">
        <div className="p-[20px] rounded border-none font-bold cursor-pointer flex justify-center bg-red-600 sm:font-[400] sm:text-[14px]">
          Sign in with Google
        </div>
        <div className="p-[20px] rounded border-none font-bold cursor-pointer flex justify-center bg-black sm:font-[400] sm:text-[14px] text-white">
          Sign in with Github
        </div>
        <div className="p-[20px] rounded border-none font-bold cursor-pointer flex justify-center bg-[#087BEA] sm:font-[400] sm:text-[14px] text-white">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
