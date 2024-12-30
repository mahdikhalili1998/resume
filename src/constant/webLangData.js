import react from "@/lottie/react.json";
import html from "@/lottie/html.json";
import github from "@/lottie/github.json";
import javaScripts from "@/lottie/javaScripts.json";
import git from "@/lottie/git.json";

const data = [
  {
    title: "Html",
    animation: html,
    detail: [
      "Semantic Elements",
      "Forms",
      "Multimedia Elements",
      "Graphics and Animation",
    ],
  },
  {
    title: "Css",
    logo: true,
    detail: [
      "Selectors",
      "Flexbox",
      "Grid Layout",
      "Responsive Media",
      "Filters",
      "Effects and Animations",
    ],
  },
  {
    title: "JavaScripts",
    animation: javaScripts,
    detail: [
      "ES6",
      "Data Type",
      "Operators",
      "Conditional Statment & Loops",
      "Date ",
      "DOM",
      "BOM",
      "Acynchronous js",
      "Error Handling",
    ],
  },
  {
    title: "React js",
    animation: react,
    detail: [
      "Jsx",
      "class",
      "Based Component",
      "Functional Component",
      "LifeCycle",
      "Hook",
      "Context",
      "Api",
      "Form Validation",
      "Prop Type",
      "Material UI ",
      "Style Components",
      "Css Module",
      "Redux",
      "React Router",
      "React Query ",
      "React Devtools",
    ],
  },
  {
    title: "Next",
    logo: true,
    detail: [
      "Page Router",
      "App Router",
      "Api Route Handler",
      "Next Auth",
      "Layout",
      "SSR",
      "SSG",
      "ISR",
      "Middleware",
    ],
  },
  {
    title: "Git",
    animation: git,
    detail: ["api", "fetxhing", "knox", "callOfDuty"],
  },

  {
    title: "GitHub",
    animation: github,
    detail: ["api", "fetxhing", "knox", "callOfDuty"],
  },

  {
    title: "Tailwind",
    logo: true,
    detail: ["api", "fetxhing", "knox", "callOfDuty"],
  },
  {
    title: "PWA",
    logo: true,
    detail: ["api", "fetxhing", "knox", "callOfDuty"],
  },
];

export default data;
