import { Qparams } from "@/types";
import React from "react";
import { getArticles, getCategory, getSubCategories } from "../utils/data";
import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";
import SectionLayout from "@/components/molecules/sectionLayout";
import HelpCenterSearchBar from "@/components/molecules/helpCenterSearchBar";
import { Divider } from "@/components/atoms/divider";
import ListingTypeTab from "@/components/molecules/listingTypeTab";
import Flex from "@/components/atoms/flex";
import ArrowRight from "@/components/icons/arrowRight";
import SectionAside from "@/components/molecules/sectionAside";
import NotFoundPage from "@/app/404";

const TextLink = ({ text, href }: { text: string; href: string }) => (
  <Link href={href}>
    <Text text={text} type="h1" size="1.5rem" />
  </Link>
);

function Section({ params }: Qparams) {
  if (!params.section) return <NotFoundPage />;
  const category = getCategory(params.category);
  if (!category) return <NotFoundPage />;
  const subCategories = getSubCategories(category);
  const subCategory = subCategories.find(
    (subCategory) => subCategory.url.split("/")[2] === params.section
  );
  if (!subCategory) return <NotFoundPage />;
  const articles = getArticles(subCategory);
  return (
    <>
      <SectionLayout>
        <Link href={subCategory.url}>
          <Text text={subCategory.name} type="p" size={48} weight={600} />
        </Link>
        <Text text={subCategory.description} type="p" size={15} weight={200} />
        <HelpCenterSearchBar margin={"2rem 0"} />
      </SectionLayout>
      <Divider margin="0" />
      <ListingTypeTab />
      <SectionLayout margin="4rem auto">
        <Flex gap="4rem" overflow="unset">
          <SectionAside
            subCategories={subCategories}
            subCategory={subCategory.name}
          />
          <main style={{ width: "40%" }}>
            <Text
              text="Getting started"
              type="h1"
              size="2.3rem"
              styles={{ marginBottom: "1rem" }}
            />
            {articles.map((article) => (
              <div key={article.id}>
                <Flex align="center" gap=".5rem">
                  <TextLink text={article.title} href={article.url} />
                  <ArrowRight />
                </Flex>
                <Divider margin="1.2rem 0" />
              </div>
            ))}
          </main>
        </Flex>
      </SectionLayout>
    </>
  );
}

export default Section;
