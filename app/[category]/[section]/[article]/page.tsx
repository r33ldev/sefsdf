
import Text from "@/components/atoms/text";
import { Qparams } from "@/types";
import { getArticle } from "../../utils/data";

interface pageProps {
  params: Qparams["params"];
}

function page({ params }: pageProps) {
  if (!params.article) return <div>404</div>;
  const article = getArticle(params.article);
  if (!article) return <div>404</div>;
  return (
    <div>
      title <Text type="p" size="1.5rem" text={article.title} />
      content <Text type="p" size="1.5rem" text={article.content} />
    </div>
  );
}

export default page;
