import { ILocale } from "@/types/props";
import { useTranslations } from "next-intl";
import React from "react";
import { GiPolarStar } from "react-icons/gi";

function WorkExperience({ locale }: ILocale) {
  const t = useTranslations("exprience");
  const z = useTranslations("sampleWork");

  return (
    <div className={`${locale === "fa" ? "rtl" : "ltr"} mt-10`}>
      {" "}
      <h1
        className={`${locale === "fa" ? "rtl text-right font-vazirMatn" : "ltr"} mb-6 flex items-center gap-2 text-xl font-medium text-white`}
      >
        <GiPolarStar className="text-2xl text-cyan-400" />

        {t(`title`)}
      </h1>
      <p className="font-semibold text-slate-400">{t("text")}</p>
      <a
        className={`${locale === "fa" ? "font-vazirMatn" : "font-sans"} text-xl font-bold text-cyan-500`}
        href="https://garmeja.com/"
        target="_blank"
      >
        {z("linko")}
      </a>
    </div>
  );
}

export default WorkExperience;
