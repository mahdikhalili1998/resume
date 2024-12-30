"use client";
import { IWebLangData } from "@/types/props";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

function WebLang({ item: { detail, logo, animation, title } }: IWebLangData) {
  const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
  return (
    <div className="mt-10 flex flex-col items-start">
      <div className="flex items-center gap-3">
        {" "}
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
        <h1 className="glowing-text text-lg font-medium">{title}</h1>
      </div>
      <ul className="ml-5 mt-5">
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
