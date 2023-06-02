import NotFoundPage from "@/app/404";
import { Qparams } from "@/types";
import { Divider } from "atom/divider";
import Flex from "atom/flex";
import ListingTypeTab from "molecule/listingTypeTab";
import SectionArticle from "molecule/sectionArticles";
import SectionAside from "molecule/sectionAside";
import SectionHero from "molecule/sectionHero";
import SectionLayout from "molecule/sectionLayout";
import { getArticles, getCategory, getSubCategories } from "../utils/data";



function Section({ params }: Qparams) {
  if (!params.section) return <NotFoundPage />;
  const category = getCategory(params.category);
  if (!category) return <NotFoundPage />;
  const subCategories = getSubCategories(category);
  const subCategory = subCategories.find(
    (subCategory) => subCategory.url.split("/")[2] === params.section
  );
  if (!subCategory) return <NotFoundPage />;
  const articles = getArticles(subCategory);
  return (
    <>
      <SectionLayout>
        <SectionHero title={subCategory.name} description={subCategory.description} />
      </SectionLayout>
      <Divider margin="0" />
      <ListingTypeTab />
      <SectionLayout margin="4rem auto">
        <Flex gap="4rem" overflow="unset">
          <SectionAside
            subCategories={subCategories}
            subCategory={subCategory.name}
          />
         <SectionArticle articles={articles}/>
        </Flex>
      </SectionLayout>
    </>
  );
}

export default Section;
