import BreadCrumb from "@/components/molecules/breadcrumb";
import { Qparams } from "@/types";
import { getPageLayout } from "@/utils/utils";
import { getCategory } from "./utils/data";
import Link from "@/components/atoms/link";
import { Metadata } from "next";
import SectionLayout from "@/components/molecules/sectionLayout";
import Text from "@/components/atoms/text";
import HelpCenterSearchBar from "@/components/molecules/helpCenterSearchBar";
import { Divider } from "@/components/atoms/divider";

interface TestLayoutProps {
  children: React.ReactNode;
  params: Qparams["params"];
}

export async function generateMetadata({
  params,
}: TestLayoutProps): Promise<Metadata> {
  const category = getCategory(params.category);
  if (!category) return { title: "404" };
  return {
    title: category.name,
    description: category.description,
    keywords: category?.keywords,
  };
}

export default async function CategoryLayout({
  params,
  children,
}: TestLayoutProps) {
  if (!params.category) return <div>404</div>;
  const category = getCategory(params.category);
  if (!category) return <div>404</div>;
  // const PageLayout = getPageLayout(category.layout);

  return (
    <div>
      <SectionLayout>
        <Link href={category.url}>
          <Text text={category.name} type="p" size={48} weight={600} />
          <Text text={category.description} type="p" size={15} weight={200} />
        </Link>
        <HelpCenterSearchBar margin={"2rem 0"} />
      </SectionLayout>
      <Divider />
      <SectionLayout margin="4rem auto">
        <div>{children}</div>
      </SectionLayout>
    </div>
  );
}
