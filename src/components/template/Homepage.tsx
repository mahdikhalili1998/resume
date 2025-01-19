// import { useTranslations } from "next-intl";
import React from "react";
import Bio from "./Bio";
import { ILocale } from "@/types/props";
import WebLangGroup from "./WebLangGroup";
import WorkExperience from "./WorkExperience";
import ContactUs from "./ContactUs";
import SampleWork from "./SampleWork";

function Homepage({ locale }: ILocale) {
  return (
    <div className="my-14 px-3">
      <Bio locale={JSON.parse(JSON.stringify(locale))} />
      <WebLangGroup locale={locale} />
      <WorkExperience locale={locale} />
      <ContactUs locale={locale} />
      <SampleWork locale={locale} />
    </div>
  );
}

export default Homepage;
