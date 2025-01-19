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
    <div className="mt-10">
      <h1
        className={`${locale === "fa" ? "rtl text-right font-vazirMatn" : "ltr"} mb-6 flex items-center gap-2 text-xl font-medium text-white`}
      >
        <GiPolarStar className="text-2xl text-cyan-400" />

        {t(`work`)}
      </h1>
      <p className={`font-semibold text-slate-400`}>{t("explianone")}</p>
      <div className="mx-auto flex w-max items-center gap-2 p-4">
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
          className="450:w-[14rem] h-auto w-[10rem] rounded-2xl sm:w-[16rem] md:w-[20rem]"
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
      <p className={`font-semibold text-slate-400`}>{t("explianThree")}</p>
      <a
        className={`${locale === "fa" ? "font-vazirMatn" : "font-sans"} font-bold text-cyan-500`}
        href="https://resume-navy-psi-72.vercel.app/en"
      >
        برای مشاهده اینجا کلیک کنید{" "}
      </a>
    </div>
  );
}

export default SampleWork;
