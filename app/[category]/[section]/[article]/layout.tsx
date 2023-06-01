import ArticleFooter from "@/components/molecules/articleFooter";
import BreadCrumb from "@/components/molecules/breadcrumb";
import RelatedArticle from "@/components/molecules/relatedArticle";
import SectionLayout from "@/components/molecules/sectionLayout";
import { Qparams } from "@/types";
import { capitalized } from "@/utils/utils";
import ArticleHero from "molecule/articleHero";
import React from "react";

interface pageProps {
  params: Qparams["params"];
  children: React.ReactNode;
}

export async function generateMetadata({ params }: pageProps) {
  const article = params?.article?.replace(/-/g, " ") || "";
  const category = params?.category || "";
  return {
    title: `${capitalized(article)} - ${capitalized(category)} - Checkin Inc`,
  };
}

export default function layout({ children, params }: pageProps) {
  const type = params?.category === "how-to-videos" ? "videos" : "articles";
  return (
    <main>
      <ArticleHero type={type} />
      <SectionLayout>
        <BreadCrumb />
        {children}
        <ArticleFooter />
        <RelatedArticle />
      </SectionLayout>
    </main>
  );
}
