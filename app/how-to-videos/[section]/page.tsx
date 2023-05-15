import { getSubCategories } from "@/app/[category]/utils/data";
import { Qparams, VideoArticle } from "@/types";
import { VIDEO_ARTICLES } from "@/utils/data";
import PageWrapper from "./components/pageWrapper";
import Videos from "./components/videos";
interface VideoSectionProps {
  params: Qparams["params"];
}

function VideoSection({ params }: VideoSectionProps) {
  const subCategories = getSubCategories("how-to-videos");
  const subCategory = subCategories.find(
    (subCategory) => subCategory.url.split("/")[1] === params.section
  );
  const articles = VIDEO_ARTICLES.reduce((acc: VideoArticle[], article) => {
    if (article.section === subCategory?.id) {
      acc.push({
        ...article,
        url: `${subCategory?.url}/${article.url}`,
      });
    }
    return acc;
  }, []);
  const repeatedArticles: VideoArticle[] = [];
  for (let i = 0; i < 5; i++) {
    articles.forEach((article) => {
      repeatedArticles.push(article);
    });
  }
  return (
    <PageWrapper>
      <Videos articles={repeatedArticles} />
    </PageWrapper>
  );
}

export default VideoSection;
