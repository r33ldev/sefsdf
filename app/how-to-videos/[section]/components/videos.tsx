"use client";
import { Grid } from "@/components/atoms/grid";
import Text from "@/components/atoms/text";
import { VideoArticle } from "@/types";
import React, { useState } from "react";
import play from "@/assets/image/play.svg";
import Link from "@/components/atoms/link";
import { Divider } from "@/components/atoms/divider";
import Pagination from "@/components/molecules/pagination";

function Videos({ articles }: { articles: VideoArticle[] }) {
  const [limit, _setLimit] = useState(9);
  const [shownArticles, setShownArticles] = useState<VideoArticle[]>(
    articles.slice(0, limit)
  );
  const [page, setPage] = useState(1);
  const onChange = (page: number) => {
    setPage(page);
    setShownArticles(articles.slice((page - 1) * limit, page * limit));
  };
  return (
    <>
      <Grid columns="repeat(3, 1fr)" gap="2rem">
        {shownArticles.map((article) => (
          <Link href={`${article.url}`} key={article.id}>
            <div style={{ position: "relative" }} title={article.title}>
              {article?.cover && (
                <img src={article.cover.src} alt={article.title} />
              )}
              <figure>
                <img src={play.src} alt="" height={"200px"} />
              </figure>
            </div>
            <div style={{ padding: "1rem" }}>
              <Text
                text={article.title}
                type="p"
                size={15}
                weight={800}
                styles={{
                  margin: "1rem 0",
                }}
              />
              <Text
                text={article.description.slice(0, 30) + "..."}
                type="p"
                size={13}
                weight={200}
              />
            </div>
          </Link>
        ))}
      </Grid>
      <Divider margin="2rem 0" />
      <Pagination onChange={onChange} total={articles.length} current={page} />
    </>
  );
}

export default Videos;
