import { getArticle } from "@/app/[category]/utils/data";
import Article from "@/components/atoms/article";
import Flex from "@/components/atoms/flex";
import Text from "@/components/atoms/text";
import TOC from "@/components/atoms/toc";
import { Qparams } from "@/types";
import { SAMPLE_ARTICLE } from "@/utils/data";
import React from "react";

interface pageProps {
  params: Qparams["params"];
}

function UpdateArticle({ params }: pageProps) {
  const article = getArticle(params.article, "updates");
  if (!article) return <div>404</div>;
  console.log(article);
  return (
    <Flex justify="space-between" margin="2rem 0">
      <div style={{ width: "60%" }}>
        <Text type="p" text={article.title} size={"3.6rem"} />
        <Article>
          <article
            className="prose lg:prose-xl"
            style={{ width: "100%!important" }}
          >
            <div dangerouslySetInnerHTML={{ __html: SAMPLE_ARTICLE }} />
          </article>
        </Article>
      </div>
      <TOC />
    </Flex>
  );
}

export default UpdateArticle;
