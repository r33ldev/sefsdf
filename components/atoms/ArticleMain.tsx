"use client";

import Article from "@/components/atoms/article";
import Text from "@/components/atoms/text";
import TOC from "@/components/atoms/toc";
import { ArticleType } from "@/types";
import { VideoArticle } from "@/types";
import React, { useEffect, useState } from "react";
import Flex from "./flex";
import { useScreenResolution } from "hook/useScreenResolution";

type ArticleMainType<T> = Partial<T> & { body: string };

function ArticleMain({
  article,
}: {
  article: ArticleMainType<VideoArticle | ArticleType>;
}) {
  const [tocList, setTocList] = useState<any>([]);
  const [active, setActive] = useState<any>(tocList[0]);
  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4");
    const newList = [];
    for (const heading of headings) {
      const text = (heading as HTMLElement).innerText;
      const id = text.replace(/\s/g, "-").toLowerCase();
      article.body = article.body.replace(`>${text}`, ` id=${id}>${text}`);
      newList.push({
        id: id,
        text: text,
        isSubsection: heading.tagName.toLowerCase() === "h2",
      });
    }
    setTocList(newList);
    setActive(newList[0]);
  }, [article]);
  const { isMobile } = useScreenResolution();
  return (
    <Flex justify="space-between" margin="2rem 0">
      <div style={{ width: isMobile ? "100%" : "60%" }}>
        <Text
          type="p"
          text={article.title || ""}
          size={isMobile ? "2.9rem" : "3.6rem"}
          weight="bold"
        />
        <Article>
          <article
            className="prose lg:prose-xl"
            style={{ width: "100%!important" }}
          >
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </article>
        </Article>
      </div>
      {!isMobile && (
        <TOC active={active} setActive={setActive} tocList={tocList} />
      )}
    </Flex>
  );
}

export default ArticleMain;
