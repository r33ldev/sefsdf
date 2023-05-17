import Flex from "@/components/atoms/flex";
import { Grid } from "@/components/atoms/grid";
import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";
import { Qparams, Section } from "@/types";
import Image from "next/image";
import { getCategory, getSubCategories } from "./utils/data";
import SectionLayout from "@/components/molecules/sectionLayout";
import HelpCenterSearchBar from "@/components/molecules/helpCenterSearchBar";
import { Divider } from "@/components/atoms/divider";
import NotFoundPage from "../404";

export default async function CategoryPage({ params }: Qparams) {
  const category = getCategory(params.category);
  if (!category) return <NotFoundPage />;
  let subCategories = getSubCategories(category);
  const repeatedCategories: Section[] = [];
  for (let i = 0; i < 4; i++) {
    subCategories.forEach((subCategory) => {
      repeatedCategories.push(subCategory);
    });
  }
  return (
    <div>
      <SectionLayout>
        <Link href={category.url}>
          <Text text={category.name} type="p" size={48} weight={600} />
          <Text text={category.description} type="p" size={15} weight={200} />
        </Link>
        <HelpCenterSearchBar margin={"2rem 0"} />
      </SectionLayout>
      <Divider />
      <SectionLayout margin="4rem auto">
        <Grid columns="repeat(4, 1fr)">
          {repeatedCategories.map((subCategory) => (
            <Link href={subCategory.url} key={subCategory.id}>
              <Flex gap="1.5rem" align="flex-start">
                <Image
                  src={subCategory.icon}
                  alt={subCategory.name}
                  height={48}
                />
                <div>
                  <Text
                    text={subCategory.name}
                    type="p"
                    size={22}
                    weight={800}
                    color="#212121"
                  />
                  <Text
                    text={"view section \u27F6"}
                    type="p"
                    size={13}
                    color="#1B76AF"
                    weight={100}
                  />
                </div>
              </Flex>
            </Link>
          ))}
        </Grid>
      </SectionLayout>
    </div>
  );
}
