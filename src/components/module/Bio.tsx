"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

const userObject = {
  name: "Ali Reza",
  age: 29,
  job: "Software Engineer",
  workplace: "Tehran, Iran",
  height: 178,
  weight: 72,
};

export default function Bio() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-5 text-white">
      <div className="rounded-lg p-4 shadow-lg">
        <SyntaxHighlighter language="javascript" style={tomorrow}>
          {JSON.stringify(userObject, null, 2)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
