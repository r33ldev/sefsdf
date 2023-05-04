import { StaticImageData } from "next/image";
import { section } from "./../config/styled";
export type Siteconfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  links: {
    github: string;
    twitter: string;
    linkedin: string;
    email: string;
  };
};

export type Support = {
  name: string;
  id: number;
  description: string;
  url: string;
  layout: string;
  keywords?: string[];
  icon: StaticImageData;
};

export type Section = {
  name: string;
  id: number;
  description: string;
  url: string;
  category: number;
  keywords?: string[];
  icon: StaticImageData;
};

export type Qparams = {
  params: {
    category?: string;
    section?: string;
    search?: string;
    layout?: string;
    article?: string;
  };
};

export type Article = {
  id: number;
  title: string;
  description: string;
  content: string;
  category: number;
  section: number;
  url: string;
};

export type SuggestedArticleType = {
  id: number;
  title: string;
  articles: Article[];
};