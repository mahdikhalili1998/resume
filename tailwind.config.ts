import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: ["Vazirmatn RD"],
        iransans: ["IRANSansXFaNum"],
      },
      backgroundImage: {
        "code-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/image/code.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
