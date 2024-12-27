"use client";
import { ILocale } from "@/types/props";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { GiPolarStar } from "react-icons/gi";

function TextDemo({ locale }: ILocale) {
  const el = useRef(null);
  const t = useTranslations("header");

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t("name"), t("front"), t("next")],
      typeSpeed: 60,
      backSpeed: 60, // سرعت پاک کردن متن
      backDelay: 1000, // تاخیر قبل از پاک کردن متن
      loop: true, // تکرار بی‌پایان
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      dir={locale === "fa" ? "rtl" : "ltr"}
      className={`${locale === "fa" ? "" : ""} mx-auto flex w-max items-center gap-2 rounded-lg bg-slate-200 px-3 py-2 shadow-lg shadow-slate-400`}
    >
      <h3
        className={`${locale === "fa" ? "font-iransans" : "font-sans"} bg-code-pattern bg-clip-text bg-top text-2xl font-extrabold text-transparent`}
      >
        {t("im")}
      </h3>
      <h3
        className={`${locale === "fa" ? "font-iransans" : "mt-2 font-sans"} bg-code-pattern bg-clip-text bg-top font-medium text-transparent`}
        ref={el}
      ></h3>
      {locale === "en" ? null : (
        <h3
          className={`${locale === "fa" ? "font-iransans" : "font-sans"} bg-code-pattern bg-clip-text bg-top text-[25px] font-extrabold text-transparent`}
        >
          هستم
        </h3>
      )}
    </div>
  );
}

export default TextDemo;
