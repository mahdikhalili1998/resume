import { ILocale, IWebLangData } from "@/types/props";
import WebLang from "../module/WebLang";
import webLangData from "@/constant/webLangData";
import { useTranslations } from "next-intl";

function WebLangGroup({ locale }: ILocale) {
  const t = useTranslations("webLang");
  const dataWithIntel = webLangData(t) as unknown as IWebLangData[];
  return (
    <div>
      {dataWithIntel.map((item: IWebLangData, index: number) => (
        <WebLang key={index} {...item} locale={locale} />
      ))}
    </div>
  );
}

export default WebLangGroup;
