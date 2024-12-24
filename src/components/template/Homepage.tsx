import { useTranslations } from "next-intl";
import React from "react";

function Homepage() {
  const t = useTranslations("homepage");
  return <div>{t("hello")}</div>;
}

export default Homepage;
