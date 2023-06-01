import NotFoundPage from "@/app/404";
import { getArticle } from "@/app/[category]/utils/data";
import ArticleMain from "@/components/atoms/ArticleMain";
import Flex from "@/components/atoms/flex";
import { Qparams } from "@/types";
import { SAMPLE_ARTICLE } from "@/utils/data";

interface pageProps {
  params: Qparams["params"];
}

function UpdateArticle({ params }: pageProps) {
  const article = getArticle(params.article, "updates");
  if (!article) return <NotFoundPage />;
  return <ArticleMain article={{ ...article, body: SAMPLE_ARTICLE }} />;
}

export default UpdateArticle;
