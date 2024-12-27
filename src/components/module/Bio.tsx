"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTranslations } from "next-intl";
import { ILocale } from "@/types/props";
import { GiPolarStar } from "react-icons/gi";
import BioText from "../element/BioText";

const customStyle = {
  backgroundColor: "transparent", // رنگ پس‌زمینه
};

export default function Bio({ locale }: ILocale) {
  const userObject = {
    name: "Mahdi",
    lastName: "Khalili",
    age: 26,
    born: locale === "fa" ? "1377/01/21" : "1998/April/10",
    job: "web developer",
    MilitaryService: true,
    Married: false,
    address: {
      country: "Iran",
      province: "Gilan",
      city: "Lahijan",
    },
    education: ["Computer Engineering ", "Information Technology"],
    skills: [
      "html",
      "css",
      "js",
      "react",
      "nextjs",
      "tailwindcss",
      "pwa",
      "git",
      "gitHub",
      "gitLab",
    ],
  };
  const t = useTranslations("bio");
  return (
    <div className="flex flex-col">
      <h1
        className={`${locale === "fa" ? "rtl font-iransans text-right" : "ltr"} flex items-center gap-2 text-xl font-medium text-slate-400`}
      >
        <GiPolarStar className="text-2xl text-cyan-500" />
        {t(`title`)}
      </h1>
      <div className="">
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow}
          customStyle={customStyle}
        >
          {JSON.stringify(userObject, null, 2)}
        </SyntaxHighlighter>
      </div>
      <BioText locale={JSON.parse(JSON.stringify(locale))} />
    </div>
  );
}
