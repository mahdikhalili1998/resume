import { ILocale } from "@/types/props";
import { useTranslations } from "next-intl";
import React from "react";
import { GiPolarStar } from "react-icons/gi";

function WorkExperience({ locale }: ILocale) {
  const t = useTranslations("exprience");

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
    </div>
  );
}

export default WorkExperience;
