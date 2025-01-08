// import { useTranslations } from "next-intl";
import React from "react";
import Bio from "../module/Bio";
import { ILocale } from "@/types/props";
import WebLangGroup from "./WebLangGroup";
import WorkExperience from "../module/WorkExperience";
import ContactUs from "./ContactUs";

function Homepage({ locale }: ILocale) {
// console.log('phone NUmber : +98xxxx06')
  return (
    <div className="my-14 px-3">
      <Bio locale={JSON.parse(JSON.stringify(locale))} />
      <WebLangGroup locale={locale} />
      <WorkExperience locale={locale} />
      <ContactUs locale={locale} />
    </div>
  );
}

export default Homepage;
