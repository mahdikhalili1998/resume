"use client";
import { IWebLangData } from "@/types/props";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

function WebLang({ item: { detail, logo, animation, title } }: IWebLangData) {
  const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
  return (
    <div className="mt-10">
      <div className="flex items-center">
        {animation && (
          <Lottie
            animationData={animation}
            loop
            play
            style={{
              width: 100,
              height: 100,
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
            className={"h-auto w-[10rem]"}
          />
        )}
        <h2 className="text-lg font-medium text-slate-400">{title}</h2>
      </div>
    </div>
  );
}

export default WebLang;
