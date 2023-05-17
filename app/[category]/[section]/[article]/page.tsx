import Text from "@/components/atoms/text";
import { Qparams } from "@/types";
import { getArticle } from "../../utils/data";
import Flex from "@/components/atoms/flex";
import { SAMPLE_ARTICLE } from "@/utils/data";
import Article from "@/components/atoms/article";
import TOC from "@/components/atoms/toc";
import NotFoundPage from "@/app/404";
import ArticleMain from "../../../../components/atoms/ArticleMain";

interface pageProps {
  params: Qparams["params"];
}

function page({ params }: pageProps) {
  if (!params.article || !params?.category) return <NotFoundPage />;
  const type = params?.category === "how-to-videos" ? "videos" : "articles";
  const article = getArticle(params.article, type);
  if (!article) return <NotFoundPage />;
  return (
    <Flex justify="space-between" margin="2rem 0">
      <ArticleMain article={{ ...article, body: SAMPLE_ARTICLE }} />
    </Flex>
  );
}

export default page;
