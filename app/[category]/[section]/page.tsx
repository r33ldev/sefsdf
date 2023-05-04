import { Qparams } from "@/types";
import React from "react";
import { getArticles, getCategory, getSubCategories } from "../utils/data";
import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";

const TextLink = ({ text, href }: { text: string; href: string }) => (
  <Link href={href}>
    <Text text={text} type="h1" size="2rem" />
  </Link>
);

// async function getPageData({
//   params,
// }: Qparams): Promise<{ [key: string]: any }> {
//   const category = getCategory(params.category);
//   if (!category) return <div>404</div>;
//   const subCategories = getSubCategories(category);
//   const subCategory = subCategories.find(
//     (subCategory) => subCategory.url.split("/")[2] === params.section
//   );
//   if (!subCategory) return <div>404</div>;
//   const articles = getArticles(subCategory);

//   return {
//     category,
//     subCategories,
//     subCategory,
//     articles,
//   };
// }


function Section({ params }: Qparams) {
  if (!params.section) return <div>404</div>;
  const category = getCategory(params.category);
  if (!category) return <div>404</div>;
  const subCategories = getSubCategories(category);
  const subCategory = subCategories.find(
    (subCategory) => subCategory.url.split("/")[2] === params.section
  );
  if (!subCategory) return <div>404</div>;
  const articles = getArticles(subCategory);
  return (
    <div>
      search result
      <div style={{ display: "flex", gap: "2rem" }}>
        <aside>
          {subCategories.map((subCategory) => (
            <div key={subCategory.name} style={{ fontSize: "2rem" }}>
              <Link href={`${subCategory.url}`}>{subCategory.name}</Link>
            </div>
          ))}
        </aside>
        <main>
          <Text text="Getting started" type="h1" size="2rem" />
          {articles.map((article) => (
            <TextLink text={article.title} href={article.url} key={article.id} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default Section;
