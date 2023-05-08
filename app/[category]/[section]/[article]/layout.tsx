import SectionLayout from "@/components/molecules/sectionLayout";
import { Qparams } from "@/types";
import Image from "next/image";
import React from "react";
import articleBanner from "../../../../assets/image/articleBanner.png";
import BreadCrumb from "@/components/molecules/breadcrumb";
import ArticleFooter from "@/components/molecules/articleFooter";
import RelatedArticle from "@/components/molecules/relatedArticle";
import { capitalized } from "@/utils/utils";

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
      {type === "videos" ? (
        <div
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          <iframe
            width="100%"
            height="484"
            sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/zxiCNQ2BD08?rel=0"
            title="How to become a host on Checkin"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Image src={articleBanner.src} width={1920} height={400} alt="" />
      )}
      <SectionLayout>
        <BreadCrumb />
        {children}
        <ArticleFooter />
        <RelatedArticle />
      </SectionLayout>
    </main>
  );
}
