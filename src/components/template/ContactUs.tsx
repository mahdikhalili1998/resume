"use client";
import { ILocale, ISocial } from "@/types/props";
import React, { FC } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import socialData from "../../constant/SocialData";
import { GiPolarStar } from "react-icons/gi";

const ContactUs: FC<ILocale> = ({ locale }) => {
  const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
  const t = useTranslations("social");
  const dataWithIntel = socialData(t) as unknown as ISocial[];
  return (
    <div className={`${locale === "fa" ? "rtl" : "ltr"} mt-10`}>
      <h1
        className={`${locale === "fa" ? "text-right font-vazirMatn" : "ltr"} flex items-center gap-2 text-xl font-medium text-white`}
      >
        <GiPolarStar className="text-2xl text-cyan-400" />
        {t(`way`)}
      </h1>
      <div className="mt-10 space-y-5">
        {" "}
        {dataWithIntel.map((item: ISocial) => {
          return (
            <a
              className={`${locale === "fa" ? "font-vazirMatn" : "font-sans"} flex items-center gap-2 font-medium text-slate-400`}
              href={item.url}
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Lottie
                animationData={item.animation}
                loop
                play
                style={{
                  width: 80,
                  height: 70,
                }}
              />
              <span> My {item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactUs;
