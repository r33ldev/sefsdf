import { getSubCategories } from "@/app/[category]/utils/data";
import { Divider } from "@/components/atoms/divider";
import Text from "@/components/atoms/text";
import SectionLayout from "@/components/molecules/sectionLayout";
import { Qparams } from "@/types";
import SectionHero from "molecule/sectionHero";
import VideoArticleSection from "molecule/videoSection";

interface sectionProps {
  children: React.ReactNode;
  params: Qparams["params"];
}

export default async function VideoSectionLayout({
  children,
  params,
}: sectionProps) {
  const subCategories = getSubCategories("how-to-videos");
  const subCategory = subCategories.find(
    (subCategory) => subCategory.url.split("/")[1] === params.section
  );
  params.key = subCategory?.id;
  if (!params?.section || !subCategory)
    return (
      <>
        <SectionLayout>
          {/* <Text type="p" text="How-To Videos" size={"5.25rem"} weight={800} />
          <Text
            type="p"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing"
            size={"1.55rem"}
          /> */}
          <SectionHero
            title="How-to Videos"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing"
          />
        </SectionLayout>
        <Divider margin="3rem 0" />
        <SectionLayout>
          <Text type="p" text="Filter" size={"2.25rem"} weight={800} />
        </SectionLayout>
      </>
    );
  return (
    <>
      <SectionLayout>
        <SectionHero
          title="How-to Videos"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing"
          showSearch={false}
        />
      </SectionLayout>
      <Divider margin="3rem 0" />
      <SectionLayout>
        <VideoArticleSection
          subCategories={subCategories}
          subCategory={subCategory.name}
        >
          {children}
        </VideoArticleSection>
      </SectionLayout>
    </>
  );
}
// export default async function VideoSectionLayout({ children }: sectionProps) {
//   return (
//     <div>
//       <VideoFilter />
//       {children}
//     </div>
//   );
// }
