import { ILocale, IWebLangData } from "@/types/props";
import WebLang from "../module/WebLang";
import webLangData from "@/constant/webLangData";
import { useTranslations } from "next-intl";
import { GiPolarStar } from "react-icons/gi";

function WebLangGroup({ locale }: ILocale) {
  const t = useTranslations("webLang");
  const dataWithIntel = webLangData(t) as unknown as IWebLangData[];
  // console.log(dataWithIntel);
  return (
    <div className="mt-10">
      <h1
        className={`${locale === "fa" ? "rtl text-right font-vazirMatn" : "ltr"} flex items-center gap-2 text-xl font-medium text-white`}
      >
        <GiPolarStar className="text-2xl text-cyan-400" />

        {t(`title`)}
      </h1>
      <div className="600:grid 600:grid-cols-2 xl:grid-cols-3 600:gap-y-2 600:justify-self-start">
        {dataWithIntel.map((item: IWebLangData, index: number) => (
          <WebLang key={index} {...item} locale={locale} />
        ))}
      </div>
    </div>
  );
}

export default WebLangGroup;
