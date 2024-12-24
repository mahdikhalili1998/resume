import createMiddleware from "next-intl/middleware";

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/(fa|en)/:path*"],
};

export default createMiddleware({
  locales: ["en", "fa"], // هماهنگ با فایل routing
  defaultLocale: "en",
});
