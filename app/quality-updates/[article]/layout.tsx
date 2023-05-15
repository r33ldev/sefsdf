import Image from "next/image";
import articleBanner from "../../../assets/image/articleBanner.png";
import SectionLayout from "@/components/molecules/sectionLayout";
import BreadCrumb from "@/components/molecules/breadcrumb";
import ArticleFooter from "@/components/molecules/articleFooter";
import RelatedArticle from "@/components/molecules/relatedArticle";
import { Qparams } from "@/types";

interface layoutProps {
  children: React.ReactNode;
  params: Qparams["params"];
}

export const generateMetadata = ({ params }: layoutProps) => {
    const article = params?.article?.replace(/-/g, " ") || "";
    const category = params?.category || "";
    return {
        title: `${article} - ${category} - Checkin Inc`,
    };
};

export default async function layout({ children }: layoutProps) {
  return (
    <main>
      <Image src={articleBanner.src} width={1920} height={400} alt="" />
      <SectionLayout>
        <BreadCrumb />
        {children}
        <ArticleFooter />
        <RelatedArticle />
      </SectionLayout>
    </main>
  );
}
