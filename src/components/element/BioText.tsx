import { ILocale } from "@/types/props";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";

export default function BioText({ locale }: ILocale) {
  const [showFullText, setShowFullText] = useState<boolean>(false);
  const t = useTranslations("bio");
  const handleToggle = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <div
      className={`${locale === "fa" ? "rtl font-vazirMatn" : "ltr font-sans"} text-center`}
    >
      <p
        className={`overflow-hidden text-base text-slate-400 ${
          !showFullText ? "line-clamp-3" : ""
        }`}
      >
        با سلام و احترام اینجانب مهدی خلیلی، 26 ساله، ساکن استان گیلان و شهرستان
        لاهیجان، دانشجوی رشته مهندسی کامپیوتر و فناوری اطلاعات، به شدت به دنیای
        فناوری و برنامه‌نویسی علاقه‌مند هستم. دو سال است که به طور جدی وارد
        دنیای برنامه‌نویسی شده‌ام و در زمینه فرانت‌اند فعالیت می‌کنم. در طی سال
        گذشته، من پروژه‌ای را برای طراحی و پیاده‌سازی یک وب‌سایت شخصی انجام دادم
        این پروژه نه تنها به من کمک کرد تا مهارت‌های فنی خود را تقویت کنم، بلکه
        توانستم در مواجهه با چالش‌های زمان‌بندی و مدیریت پروژه، توانایی حل مسئله
        و تفکر منطقی خود را آزمایش کنم و همیشه به دنبال یادگیری فناوری‌ها و
        ابزارهای جدید در حوزه فرانت‌اند هستم و به طور منظم در دوره‌های آنلاین و
        وبینارهای آنلاین مرتبط شرکت می‌کنم. یکی از چالش‌های اصلی من در پروژه‌های
        فرانت‌اند، بهینه‌سازی عملکرد سایت‌ها است. من با استفاده از تکنیک‌های
        lazy loading و code splitting موفق شدم زمان بارگذاری صفحه را به طور
        چشمگیری کاهش دهم، که این تجربه به من آموخت که همیشه باید بهینه‌سازی
        عملکرد را در کنار زیبایی‌شناسی رابط کاربری در نظر بگیرم. هدف من از ادامه
        فعالیت در این حوزه، این است که روزی به عنوان یک فرانت‌اند دولوپر حرفه‌ای
        شناخته شوم و در پروژه‌های بزرگ وب، به عنوان یک توسعه‌دهنده موفق در سطح
        جهانی شناخته شوم با توجه به مهارت‌ها و تجربه‌هایی که تاکنون کسب کرده‌ام،
        امیدوارم فرصتی برای پیشرفت بیشتر در زمینه برنامه‌نویسی و توسعه وب در
        اختیارم قرار گیرد و با این انگیزه، دوست دارم در آینده‌ای نزدیک به جایی
        برسم که نه تنها از کدنویسی لذت ببرم، بلکه بتوانم از آن درآمدزایی کنم
      </p>

      <button
        className="mx-auto mt-4 flex w-max items-center justify-center gap-2 rounded-md bg-cyan-600 px-2 py-1 text-slate-300"
        onClick={handleToggle}
      >
        {showFullText ? (
          <FaAnglesUp className="animate-up" />
        ) : (
          <FaAnglesDown className="animate-down" />
        )}
        {showFullText ? t("less") : t("more")}
      </button>
    </div>
  );
}
