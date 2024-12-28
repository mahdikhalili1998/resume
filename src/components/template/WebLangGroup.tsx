import { ILocale } from "@/types/props";
import WebLang from "../module/WebLang";
import data from "@/constant/webLangData";

function WebLangGroup({ locale }: ILocale) {
  return (
    <div>
      {data.map((item, index) => (
        <WebLang key={index} item={item} locale={locale} />
      ))}
    </div>
  );
}

export default WebLangGroup;
