"use client";
import { IWebLangData } from "@/types/props";
import React from "react";
import dynamic from "next/dynamic";

function WebLang({ item }: IWebLangData) {
  const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
  return (
    <div>
      <div>
        <Lottie
          animationData={item.animation}
          loop
          play
          style={{ width: 280, height: 280, margin: "auto" }}
        />
      </div>
    </div>
  );
}

export default WebLang;
