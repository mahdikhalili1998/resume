export interface ILayoutProps {
  children: React.ReactNode;
  locale: string;
}

export interface ILocale {
  locale: string;
}

export interface IParams {
  params: ILocale;
}

export interface IWebLangData {
  animation?: JSON;
  title: string;
  detail: string[];
  logo?: boolean;

  locale?: string;
}

export interface ISocial {
  name: string;
  animation: any;
  url: string;
}
