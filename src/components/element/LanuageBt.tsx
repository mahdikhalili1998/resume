"use client";
import { ILocale } from "@/types/props";
import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";

function LanuageBt({ locale }: ILocale) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const changeLanguageHandler = () => {
    setOpenModal(true);
  };
  return (
    <div className="animate-languageIconDown mb-5 mr-4 flex justify-end">
      {openModal ? (
        <div className="flex items-center gap-2 rounded-3xl bg-slate-300 p-2 px-3 shadow-lg shadow-slate-500">
          <Image
            src={`/image/${locale}.png`}
            alt="usa-logo"
            width={80}
            height={80}
            priority
            className="size-[2rem] rounded-[100%] border-2 border-solid border-white shadow-md shadow-slate-600"
          />
          <Image
            src={`/image/${locale === "fa" ? "en" : "fa"}.png`}
            alt="usa-logo"
            width={80}
            height={80}
            priority
            className="size-[2rem] rounded-[100%] border-2 border-solid border-white shadow-md shadow-slate-600"
          />
        </div>
      ) : (
        <div
          onClick={(e) => changeLanguageHandler()}
          className="flex items-center rounded-3xl bg-slate-300 p-2 px-1 shadow-lg shadow-slate-500"
        >
          <BsChevronCompactLeft className="animate-moveLeft mt-[2px] text-3xl font-semibold" />
          <Image
            src={`/image/${locale}.png`}
            alt="usa-logo"
            width={80}
            height={80}
            priority
            className="size-[2rem] rounded-[100%] border-2 border-solid border-white shadow-md shadow-slate-600"
          />
        </div>
      )}
    </div>
  );
}

export default LanuageBt;
