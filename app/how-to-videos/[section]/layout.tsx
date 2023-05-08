import { getSubCategories } from "@/app/[category]/utils/data";
import { Divider } from "@/components/atoms/divider";
import Flex from "@/components/atoms/flex";
import Text from "@/components/atoms/text";
import SectionAside from "@/components/molecules/sectionAside";
import SectionLayout from "@/components/molecules/sectionLayout";
import VideoFilter from "@/components/molecules/videoFilter";
import { Qparams } from "@/types";

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
          <Text type="p" text="How-To Videos" size={"5.25rem"} weight={800} />
          <Text
            type="p"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing"
            size={"1.55rem"}
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
        <Text type="p" text="How-To Videos" size={"5.25rem"} weight={800} />
        <Text
          type="p"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing"
          size={"1.55rem"}
        />
      </SectionLayout>
      <Divider margin="3rem 0" />
      <SectionLayout>
        <Flex gap="4rem" justify="space-between" overflow="unset">
          <SectionAside
            subCategories={subCategories}
            subCategory={subCategory.name}
          />
          <main
            style={{ width: "80%", transition: "all 3s ease" }}
            className="w-full min-w-0  mt-4"
          >
          <VideoFilter />
            {children}
          </main>
        </Flex>
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
