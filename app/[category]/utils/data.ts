import { ArticleType, Qparams, Section, Support } from "@/types";
import {
  QUALITY_UPDATES,
  SUPPORT_ARTICLES,
  SUPPORT_CATEGORY,
  SUPPORT_SUBCATEGORY,
  VIDEO_ARTICLES,
} from "@/utils/data";
import { cache } from "react";

export const getSubCategories = cache((category: Support | string) => {
  if (typeof category === "string") {
    return SUPPORT_SUBCATEGORY.flatMap((support) => {
      return { ...support, url: `${category}/${support.url}` };
    });
  }
  return SUPPORT_SUBCATEGORY.filter(
    (subCategory) => subCategory.category === category.id
  ).map((subCategory) => ({
    ...subCategory,
    url: `${category.url}/${subCategory.url}`,
  }));
});

export const getCategory = cache((params: Qparams["params"]["category"]) => {
  return SUPPORT_CATEGORY.find(
    (category) => category?.url?.split("/")[1] === params
  );
});

export const getArticles = cache((section: Section) => {
  return SUPPORT_ARTICLES.filter(
    (article) => article.section === section.id
  ).map((article) => ({
    ...article,
    url: `${section.url}/${article.url}`,
  }));
});

export const suggestedArticleUrl = cache((article: ArticleType) => {
  const category = SUPPORT_CATEGORY.find(
    (category) => category.id === article.category
  );
  const section = SUPPORT_SUBCATEGORY.find(
    (section) => section.id === article.section
  );
  return `${category?.url}/${section?.url}/${article.url}`;
});

export const getArticle = cache(
  (params: Qparams["params"]["article"], type?: string) => {
    if (type === "videos")
      return VIDEO_ARTICLES.find((article) => article?.url === params);

    if (type === "updates")
      return QUALITY_UPDATES.find((article) => article?.url === params);
    return SUPPORT_ARTICLES.find((article) => article?.url === params);
  }
);
