import type { Metadata } from "next";
import "../globals.css";
import Layout from "@/components/layout/Layout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/fonts/vazirMatn/Vazirmatn-RD-font-face.css";
// import "@/fonts/iranSans/iranSansFontFace.css";

export const metadata: Metadata = {
  title: "𝑴𝒂𝒉𝒅𝒊 𝑲𝒉𝒂𝒍𝒊𝒍𝒊 𝒓𝒆𝒔𝒖𝒎𝒆",
  description: "this is personal web for showing my resume",
};

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const RootLayout: React.FC<LayoutProps> = async ({ children, params }) => {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`bg-gray-900 antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {" "}
          <Layout locale={JSON.parse(JSON.stringify(locale))}>
            {children}
          </Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
export default RootLayout;
