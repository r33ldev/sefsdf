import Flex from "@/components/atoms/flex";
import { Grid } from "@/components/atoms/grid";
import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";
import { Qparams } from "@/types";
import Image from "next/image";
import { getCategory, getSubCategories } from "./utils/data";

export default async function CategoryPage({ params }: Qparams) {
  const category = getCategory(params.category);
  if (!category) return <div>404</div>;
  let subCategories = getSubCategories(category);
  return (
    <>
      <Grid columns="repeat(4, 1fr)">
        {subCategories.map((subCategory) => (
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
    </>
  );
}
