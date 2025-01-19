"use client";
import { IWebLangData } from "@/types/props";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";

function WebLang({ detail, logo, animation, title, locale }: IWebLangData) {
  const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
  const [showFullText, setShowFullText] = useState<boolean>(false);
  const t = useTranslations("bio");
  const handleToggle = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <div
      className={`${locale === "fa" ? "rtl 500:mr-24 mr-2" : "ltr 500:ml-24 ml-2"} mt-10 flex flex-col items-start`}
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
        {detail
          .slice(0, showFullText ? detail.length : 4)
          .map((item, index) => (
            <li className={`font-semibold text-slate-400`} key={index}>
              {item}
            </li>
          ))}
        <button
          className="mt-10 flex w-max items-center justify-center gap-2 rounded-md bg-cyan-600 px-2 py-1 font-medium text-slate-300"
          onClick={handleToggle}
        >
          {showFullText ? t("less") : t("more")}
          {showFullText ? (
            <FaAnglesUp className="animate-up" />
          ) : (
            <FaAnglesDown className="animate-down" />
          )}
        </button>
      </ul>
    </div>
  );
}

export default WebLang;
