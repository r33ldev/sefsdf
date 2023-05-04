import { Article, Qparams, Section, Support } from "@/types";
import { SUPPORT_ARTICLES, SUPPORT_CATEGORY, SUPPORT_SUBCATEGORY } from "@/utils/data";

export const getSubCategories = (category: Support) => {
  return SUPPORT_SUBCATEGORY.filter(
    (subCategory) => subCategory.category === category.id
  ).map((subCategory) => ({
    ...subCategory,
    url: `${category.url}/${subCategory.url}`,
  }));
};

export const getCategory = (params: Qparams["params"]["category"]) => {
  return SUPPORT_CATEGORY.find(
    (category) => category?.url?.split("/")[1] === params
  );
};

export const getArticles = (section: Section) => {
  return SUPPORT_ARTICLES.filter(
    (article) => article.section === section.id
  ).map((article) => ({
    ...article,
    url: `${section.url}/${article.url}`,
  }));
};

export const suggestedArticleUrl = (article: Article) => {
  const category = SUPPORT_CATEGORY.find(
    (category) => category.id === article.category
  );
  const section = SUPPORT_SUBCATEGORY.find(
    (section) => section.id === article.section
  );
  return `${category?.url}/${section?.url}/${article.url}`;
}

export const getArticle = (params: Qparams["params"]["article"]) => {
  return SUPPORT_ARTICLES.find(
    (article) => article?.url === params
  );
}
