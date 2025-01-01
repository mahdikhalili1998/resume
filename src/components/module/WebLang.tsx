"use client";
import { IWebLangData } from "@/types/props";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

function WebLang({ detail, logo, animation, title, locale }: IWebLangData) {
  const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

  return (
    <div
      className={`${locale === "fa" ? "rtl mr-2" : "ltr"} mt-10 flex flex-col items-start`}
    >
      <div className={`flex items-center gap-3`}>
        {animation && (
          <Lottie
            animationData={animation}
            loop
            play
            style={{
              width: 100,
              height: 90,
            }}
          />
        )}
        {logo && (
          <Image
            src={`/image/${title}.png`}
            alt="next logo"
            width={200}
            height={200}
            priority
            className={`ml-3 h-auto w-[4rem] rounded-[100%] border-2 border-solid`}
          />
        )}
        <h1 className="glowing-text text-lg font-medium tracking-[3px]">
          {title.toUpperCase()}
        </h1>
      </div>
      <ul
        className={`${locale === "fa" ? "pr-5" : "ml-5"} ml-5 mt-5 space-y-2`}
      >
        {detail.map((item, index) => (
          <li className="font-medium text-slate-400" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WebLang;
