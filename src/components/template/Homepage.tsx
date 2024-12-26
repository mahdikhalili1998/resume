import { useTranslations } from "next-intl";
import React from "react";
import Bio from "../module/Bio";

function Homepage() {
  const t = useTranslations("homepage");
  return (
    <div>
      <Bio />
    </div>
  );
}

export default Homepage;
