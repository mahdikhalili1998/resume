// import { useTranslations } from "next-intl";
import React from "react";
import Bio from "../module/Bio";
import { ILocale } from "@/types/props";
import WebLangGroup from "./WebLangGroup";

function Homepage({ locale }: ILocale) {
  // const t = useTranslations("homepage");
  return (
    <div className="my-14 px-3">
      <Bio locale={JSON.parse(JSON.stringify(locale))} />
      <WebLangGroup locale={locale} />
    </div>
  );
}

export default Homepage;
