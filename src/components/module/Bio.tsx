"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTranslations } from "next-intl";
import { ILocale } from "@/types/props";

const userObject = {
  name: "Ali Reza",
  age: 29,
  job: "Software Engineer",
  workplace: "Tehran, Iran",
  height: 178,
  weight: 72,
};

const customStyle = {
  backgroundColor: "transparent", // رنگ پس‌زمینه
};

export default function Bio({ locale }: ILocale) {
  const t = useTranslations("bio");
  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        className={`${locale === "fa" ? "rtl font-vazirMatn" : "ltr"} text-white`}
      >
        {t(`title`)}
      </h1>
      <h1
        className={`${locale === "fa" ? "rtl font-iransans" : "ltr"} text-white`}
      >
        {t(`title`)}
      </h1>
      <div>
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow}
          customStyle={customStyle}
        >
          {JSON.stringify(userObject, null, 2)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
