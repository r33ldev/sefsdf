import React from "react";
import { Divider } from "../atoms/divider";
import { Section, Support } from "@/types";
import Link from "../atoms/link";
import Flex from "../atoms/flex";
import Text from "../atoms/text";

function SectionAside({
  subCategories,
  subCategory,
}: {
  subCategories: Section[];
  subCategory: Support["name"];
}) {
  return (
    <aside style={{ width: "15%" }}>
      <Text text="All" type="h1" size="1.5rem" />
      <Divider margin="1rem 0" />
      {subCategories.map((category) => {
        const active = category.name === subCategory;
        return (
          <div key={category.name} style={{ fontSize: "2rem" }}>
            <Link href={`${category.url}`}>
              <Flex justify="space-between" align="center">
                <Text
                  text={category.name}
                  type="p"
                  size={15}
                  color={active ? "#212121" : "#707070"}
                  weight={active ? 700 : 500}
                />
                <Text text={"3"} type="p" size={13} color="#707070" />
              </Flex>
            </Link>
            <Divider margin="1.2rem 0" />
          </div>
        );
      })}
    </aside>
  );
}

export default SectionAside;
