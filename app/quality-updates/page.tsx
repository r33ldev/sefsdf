import { Divider } from "@/components/atoms/divider";
import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";
import HelpCenterSearchBar from "@/components/molecules/helpCenterSearchBar";
import SectionLayout from "@/components/molecules/sectionLayout";
import UpdateArticles from "@/components/molecules/updateArticles";
import { QualityUpdate } from "@/types";
import { QUALITY_UPDATES } from "@/utils/data";

function UpdateHomePage() {
  const articles = QUALITY_UPDATES;
  const repeatedArticles: QualityUpdate[] = [];
  for (let i = 0; i < 40; i++) {
    articles.forEach((element) => {
      repeatedArticles.push(element);
    });
  }
  return (
    <>
      <SectionLayout>
        <Link href="/quality-updates">
          <Text text="Quality Updates" type="h1" size={48} weight={600} />
        </Link>
        <Text text="Checkin Support - updates" type="h1" size="2.3rem" />
        <HelpCenterSearchBar margin="2rem 0" />
      </SectionLayout>
      <Divider margin="0" />
      <UpdateArticles repeatedArticles={repeatedArticles} />
    </>
  );
}

export default UpdateHomePage;
