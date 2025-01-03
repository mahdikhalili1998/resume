import { ILocale } from "@/types/props";
import { useTranslations } from "next-intl";
import React from "react";
import { GiPolarStar } from "react-icons/gi";

function WorkExperience({ locale }: ILocale) {
  const t = useTranslations("exprience");

  return (
    <div className="mt-10">
      {" "}
      <h1
        className={`${locale === "fa" ? "rtl text-right font-vazirMatn" : "ltr"} flex items-center gap-2 text-xl font-medium text-slate-400`}
      >
        <GiPolarStar className="text-2xl text-cyan-500" />

        {t(`title`)}
      </h1>
    </div>
  );
}

export default WorkExperience;
