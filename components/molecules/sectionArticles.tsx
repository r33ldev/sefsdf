'use client'

import { ArticleType } from "@/types";
import { Divider } from "atom/divider";
import Flex from "atom/flex";
import Link from "atom/link";
import Text from "atom/text";
import { useScreenResolution } from "hook/useScreenResolution";
import ArrowRight from "icon/arrowRight";
import React from "react";

const TextLink = ({ text, href }: { text: string; href: string }) => (
  <Link href={href}>
    <Text text={text} type="h1" size="1.5rem" />
  </Link>
);
function SectionArticle({ articles }: { articles: ArticleType[] }) {
  const { isMobile } = useScreenResolution();
  return (
    <main style={{ width: isMobile ? "60%" : "40%" }}>
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
  );
}

export default SectionArticle;
