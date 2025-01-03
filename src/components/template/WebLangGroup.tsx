import { ILocale, IWebLangData } from "@/types/props";
import WebLang from "../module/WebLang";
import webLangData from "@/constant/webLangData";
import { useTranslations } from "next-intl";
import { GiPolarStar } from "react-icons/gi";

function WebLangGroup({ locale }: ILocale) {
  const t = useTranslations("webLang");
  const dataWithIntel = webLangData(t) as unknown as IWebLangData[];
  return (
    <div className="mt-10">
      <h1
        className={`${locale === "fa" ? "rtl text-right font-vazirMatn" : "ltr"} flex items-center gap-2 text-xl font-medium text-slate-400`}
      >
        <GiPolarStar className="text-2xl text-cyan-500" />

        {t(`title`)}
      </h1>
      {dataWithIntel.map((item: IWebLangData, index: number) => (
        <WebLang key={index} {...item} locale={locale} />
      ))}
    </div>
  );
}

export default WebLangGroup;
