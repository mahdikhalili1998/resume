"use client";
import { ILocale } from "@/types/props";
import React, { useEffect, useState } from "react";
import { GiPolarStar } from "react-icons/gi";
import { useTranslations } from "next-intl";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import Image from "next/image";

function SampleWork({ locale }: ILocale) {
  const [count, setCount] = useState<number>(1);
  const t = useTranslations("sampleWork");

  useEffect(() => {
    const interval = setTimeout(() => {
      setCount((prevCount) => (prevCount === 6 ? 1 : prevCount + 1));
    }, 3000);
    return () => clearTimeout(interval);
  }, [count]);

  const rightHandler = () => {
    setCount((prevCount) => (prevCount === 6 ? 1 : prevCount + 1));
  };

  const leftHandler = () => {
    setCount((prevCount) => (prevCount === 1 ? 6 : prevCount - 1));
  };

  return (
    <div className="mt-10 space-y-2">
      <h1
        className={`${locale === "fa" ? "rtl text-right font-vazirMatn" : "ltr"} mb-6 flex items-center gap-2 text-xl font-medium text-white`}
      >
        <GiPolarStar className="text-2xl text-cyan-400" />

        {t(`work`)}
      </h1>
      <p className={`font-semibold text-slate-400`}>{t("explianone")}</p>
      <p className={`font-semibold text-slate-400`}>{t("explianFour")}</p>
      <div className="mx-auto my-5 flex w-max items-center gap-2 p-4">
        {locale === "fa" ? (
          <span onClick={rightHandler}>
            <FaChevronCircleRight className="text-p-950 text-2xl text-purple-600" />
          </span>
        ) : (
          <span onClick={leftHandler}>
            <FaChevronCircleLeft className="text-p-950 text-2xl text-purple-600" />
          </span>
        )}
        <Image
          src={`/your-music/${count}.jpg`}
          width={400}
          height={400}
          alt="mahdi-photo"
          priority
          className="600:w-[12rem] 700:w-[13rem] h-auto w-[10rem] rounded-2xl"
        />
        {locale === "fa" ? (
          <span onClick={leftHandler}>
            <FaChevronCircleLeft className="text-p-950 text-2xl text-purple-600" />
          </span>
        ) : (
          <span onClick={rightHandler}>
            <FaChevronCircleRight className="text-p-950 text-2xl text-purple-600" />
          </span>
        )}
      </div>
      <p className={`font-semibold text-slate-400`}>{t("explianTwo")}</p>
      <p className={`mb-10 font-semibold text-slate-400`}>
        {t("explianThree")}
      </p>{" "}
      <div>
        <a
          className={`${locale === "fa" ? "font-vazirMatn" : "font-sans"} text-xl font-bold text-cyan-500`}
          href="https://your-music-two.vercel.app/en"
          target="_blank"
        >
          {t("linko")}
        </a>
      </div>
    </div>
  );
}

export default SampleWork;
