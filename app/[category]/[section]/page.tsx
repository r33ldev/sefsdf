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

const TextLink = ({ text, href }: { text: string; href: string }) => (
  <Link href={href}>
    <Text text={text} type="h1" size="1.5rem" />
  </Link>
);



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
        <Text text="All" type="h1" size="1.5rem" />
        {/* <SectionsAndArticles> */}

        <Flex gap='4rem' overflow="unset">
          <aside style={{ width: '15%' }}>
            <Divider margin="1rem 0" />
            {subCategories.map((category) => {
              const active = category.name === subCategory.name
              return (
                <div key={category.name} style={{ fontSize: "2rem" }}>
                  <Link href={`${category.url}`}>
                    <Flex justify="space-between" align="center">
                      <Text text={category.name} type='p' size={15} color={active ? '#212121' : '#707070'} weight={active ? 700 : 500} />
                      <Text text={'3'} type='p' size={13} color='#707070' />
                    </Flex>
                  </Link>
                  <Divider margin="1.2rem 0" />
                </div>
              )
            })}
          </aside>
          <main style={{ marginTop: '-2rem', width: '40%' }}>
            <Text text="Getting started" type="h1" size="2.3rem" styles={{ marginBottom: '1rem' }} />
            {articles.map((article) => (
              <div key={article.id}>
                <Flex align="center" gap='.5rem'>
                  <TextLink text={article.title} href={article.url}  />
                  <ArrowRight />
                </Flex>
                <Divider margin="1.2rem 0" />
              </div>
            ))}
          </main>
        </Flex>
        {/* </SectionsAndArticles> */}
      </SectionLayout>
    </>
  );
}

export default Section;
