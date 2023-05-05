"use client";

import Flex from "@/components/atoms/flex";
import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";
import HelpCenterSearchBar from "@/components/molecules/helpCenterSearchBar";

import ArrowRight from "@/components/icons/arrowRight";
import HelpCenterHeroBanner from "@/components/molecules/heroBanner";
import SectionLayout from "@/components/molecules/sectionLayout";
import { SUGGESTED_ARTICLES, SUPPORT_CATEGORY } from "@/utils/data";
import Image from "next/image";
import { suggestedArticleUrl } from "./[category]/utils/data";
export default function Home() {
  return (
    <main>
      <HelpCenterHeroBanner />
      <SectionLayout margin="4rem auto">
        <HelpCenterSearchBar />
      </SectionLayout>
      <SectionLayout margin="7rem auto 10rem">
        <Flex justify="space-between" gap="3rem">
          {SUPPORT_CATEGORY.map((category) => (
            <Link key={category.id} href={category.url}>
              <Flex gap="1.5rem" align="flex-start">
                <Image src={category.icon} alt={category.name} height={35} />
                <div>
                  <Text
                    text={category.name}
                    type="p"
                    size={22}
                    weight={800}
                    color="#212121"
                  />
                  <Text
                    text={category.description}
                    type="p"
                    size={15}
                    color="#363636"
                    weight={100}
                  />
                </div>
              </Flex>
            </Link>
          ))}
        </Flex>
      </SectionLayout>

      <SectionLayout>
        <Flex justify="space-between" gap="3rem">
          {SUGGESTED_ARTICLES.map((section, index) => (
            <div key={index}>
              <Text text={section.title} type="h3" size={22} weight={800} />
              {section.articles.map((article, index) => (
                <Link href={suggestedArticleUrl(article)} key={index}>
                  <Flex align="center" gap=".5rem" margin="1.5rem 0">
                    <Text
                      key={index}
                      text={article.title}
                      type="p"
                      size={15}
                      color="#363636"
                      weight={100}
                    />
                    <ArrowRight />
                  </Flex>
                </Link>
              ))}
            </div>
          ))}
        </Flex>
      </SectionLayout>
    </main>
  );
}
