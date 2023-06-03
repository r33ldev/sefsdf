"use client";

import { SUPPORT_ARTICLES } from "@/utils/data";
import { useSearchParams } from "next/navigation";
import Text from "../atoms/text";
import Link from "../atoms/link";
import { Divider } from "../atoms/divider";
import Flex from "../atoms/flex";
import Pagination from "./pagination";
import { useState } from "react";
import { ArticleType } from "@/types";
import { useScreenResolution } from "hook/useScreenResolution";
import ArrowRight from "image/arrowRight.svg";
import Image from "next/image";
export default function SearchResults() {
  const searchParams = useSearchParams();
  const search = searchParams.get("term");
  let articles = SUPPORT_ARTICLES;
  if (search) {
    articles = SUPPORT_ARTICLES.filter((article) => {
      return (
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.description.toLowerCase().includes(search.toLowerCase())
      );
    });
  }
  const [limit, _setLimit] = useState(5);
  const [shownArticles, setShownArticles] = useState<ArticleType[]>(
    articles.slice(0, limit)
  );
  const [page, setPage] = useState(1);
  const onChange = (page: number) => {
    setPage(page);
    setShownArticles(articles.slice((page - 1) * limit, page * limit));
  };
  const { isMobile } = useScreenResolution();
  return (
    <main style={{ width: isMobile ? "100%" : "70%" }}>
      {articles.length ? (
        <>
          {shownArticles.map((article) => {
            const accountType = ["Guests", "Host"][
              Math.floor(Math.random() * 2)
            ];
            return (
              <>
                <Link
                  href={`knowledge-base/account/${article.url}`}
                  key={article.id}
                >
                  <Text text={article.title} type="h3" size={23} weight={600} />
                  <Text
                    text={article.description.slice(0, 200)}
                    type="p"
                    size={15}
                    color="#363636"
                  />
                  <Flex align="center" gap="1.5rem" margin="1.4rem 0">
                    <Text
                      text={accountType}
                      type="p"
                      size={15}
                      color="#1B76AF"
                    />
                    <Image src={ArrowRight} width={17} alt="arrow" />
                    <Text
                      text={"Getting Started"}
                      type="p"
                      size={15}
                      color="#1B76AF"
                    />
                    <Image src={ArrowRight} width={17} alt="arrow" />
                  </Flex>
                  <Divider margin="3rem 0" />
                </Link>
              </>
            );
          })}
          <Pagination
            onChange={onChange}
            total={articles.length}
            current={page}
            limit={limit}
          />
        </>
      ) : (
        <Text text="No results found" type="h3" size={38} weight={600} />
      )}
    </main>
  );
}
