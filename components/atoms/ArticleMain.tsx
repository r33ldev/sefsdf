"use client";

import Article from "@/components/atoms/article";
import Text from "@/components/atoms/text";
import TOC from "@/components/atoms/toc";
import { ArticleType } from "@/types";
import { VideoArticle } from "@/types";
import React, { useEffect, useState } from "react";

type ArticleMainType<T> = Partial<T> & { body: string };

function ArticleMain({
  article,
}: {
  article: ArticleMainType<VideoArticle | ArticleType>;
}) {
  const [tocList, setTocList] = useState<any>([]);
  const [active, setActive] = useState<any>(tocList[0]);
  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3");
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
  }, []);
  return (
    <>
      <div style={{ width: "60%" }}>
        <Text type="p" text={article.title || ""} size={"3.6rem"} />
        <Article>
          <article
            className="prose lg:prose-xl"
            style={{ width: "100%!important" }}
          >
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </article>
        </Article>
      </div>
      <TOC active={active} setActive={setActive} tocList={tocList} />
    </>
  );
}

export default ArticleMain;
