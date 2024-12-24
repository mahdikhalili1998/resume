import Image from "next/image";
import React from "react";
import LanuageBt from "../element/LanuageBt";

function Header() {
  return (
    <div className="bg-code-pattern w-full bg-center pt-4 pb-10">
      <span className="mb-5 mr-4  flex justify-end">
        <LanuageBt />
      </span>
      <span className="flex justify-center">
        <Image
          src={"/image/mahdi.jpg"}
          alt="@mahdi_lhj"
          width={200}
          height={200}
          priority
          className="size-[10rem] rounded-[100%] border-2 border-solid border-white shadow-lg shadow-slate-400"
        />
      </span>
    </div>
  );
}

export default Header;
