
import Text from "@/components/atoms/text";
import { Qparams } from "@/types";
import { getArticle } from "../../utils/data";
import Flex from "@/components/atoms/flex";
import { SAMPLE_ARTICLE } from "@/utils/data";
import Article from "@/components/atoms/article";
import TOC from "@/components/atoms/toc";


interface pageProps {
  params: Qparams["params"];
}

function page({ params }: pageProps) {
  if (!params.article || !params?.category) return <div>404</div>;
  console.log('article', params.article, params?.category)
  const type = params?.category === "how-to-videos" ? "videos" : "articles";
  const article = getArticle(params.article, type);
  if (!article) return <div>404</div>;
  return (
    <Flex justify="space-between" margin="2rem 0" >
      <div style={{ width: '60%' }}>
        <Text type="p" text={article.title} size={'3.6rem'} />
        <Article>

          <article className="prose lg:prose-xl" style={{ width: '100%!important' }}>
            <div dangerouslySetInnerHTML={{ __html: SAMPLE_ARTICLE }} />
          </article>
        </Article>
      </div>
      <TOC />
    </Flex >
  );
}

export default page;
