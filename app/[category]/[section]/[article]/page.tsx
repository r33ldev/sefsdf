import NotFoundPage from "@/app/404";
import { Qparams } from "@/types";
import ArticleMain from "atom/ArticleMain";
import { getArticle } from "../../utils/data";

interface pageProps {
  params: Qparams["params"];
}

function page({ params }: pageProps) {
  if (!params.article || !params?.category) return <NotFoundPage />;
  const type = params?.category === "how-to-videos" ? "videos" : "articles";
  const article = getArticle(params.article, type);
  if (!article) return <NotFoundPage />;
  return <ArticleMain article={{ ...article, body: article.content }} />;
}

export default page;
