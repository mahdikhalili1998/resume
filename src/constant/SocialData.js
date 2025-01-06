import Telegram from "@/lottie/Telegram.json";
import Phone from "@/lottie/Phone.json";
import Instagram from "@/lottie/Instagram.json";
import WhatsApp from "@/lottie/WhatsApp.json";
import github from "@/lottie/github.json";

const socialData = (t) => [
  {
    name: t("phone"),
    url: "tel:+989389668917",
    animation: Phone,
  },
  {
    name: t("git"),

    url: "https://github.com/mahdikhalili1998",
    animation: github,
  },
  {
    name: t("insta"),

    url: "https://instagram.com/mahdi_lhj",
    animation: Instagram,
  },
  {
    name: t("whatsapp"),
    url: "https://wa.me/989389668917",
    animation: WhatsApp,
  },
  {
    name: t("tel"),
    url: "https://t.me/mahdi_lhjj",
    animation: Telegram,
  },
];

export default socialData;
