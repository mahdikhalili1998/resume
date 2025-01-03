import { ILocale } from "@/types/props";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";
import { bioFa, bioEn } from "@/constant/txt";

export default function BioText({ locale }: ILocale) {
  const [showFullText, setShowFullText] = useState<boolean>(false);
  const t = useTranslations("bio");
  const handleToggle = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <div
      className={`${locale === "fa" ? "rtl font-vazirMatn" : "ltr font-sans"} text-center`}
    >
      <p
        className={`overflow-hidden text-base font-medium text-slate-400 ${
          !showFullText ? "line-clamp-3" : ""
        }`}
      >
        {locale === "fa" ? bioFa : bioEn}
      </p>

      <button
        className="mx-auto mt-4 flex w-max items-center justify-center gap-2 rounded-md bg-cyan-600 px-2 py-1 font-medium text-slate-300"
        onClick={handleToggle}
      >
        {showFullText ? t("less") : t("more")}
        {showFullText ? (
          <FaAnglesUp className="animate-up" />
        ) : (
          <FaAnglesDown className="animate-down" />
        )}
      </button>
    </div>
  );
}
