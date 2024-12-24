import Image from "next/image";
import React from "react";
import LanuageBt from "../element/LanuageBt";
import TextDemo from "../element/TextDemo";
import { ILocale } from "@/types/props";

function Header({ locale }: ILocale) {
  return (
    <div className="w-full space-y-10 rounded-b-full bg-code-pattern bg-top pb-24 pt-4">
      <LanuageBt />
      <span className="flex justify-center">
        <Image
          src={"/image/mahdi.jpg"}
          alt="@mahdi_lhj"
          width={200}
          height={200}
          priority
          className="mt-5 size-[10rem] rounded-[100%] border-2 border-solid border-white shadow-lg shadow-slate-400"
        />
      </span>
      <TextDemo locale={JSON.parse(JSON.stringify(locale))} />
    </div>
  );
}

export default Header;
