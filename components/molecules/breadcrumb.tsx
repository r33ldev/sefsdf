'use client'

import { usePathname } from 'next/navigation';
import Flex from "../atoms/flex";
import Text from "../atoms/text";
import ArrowRight from '../icons/arrowRight';
import Link from '../atoms/link';
import { capitalized } from '@/utils/utils';
import { useScreenResolution } from 'hook/useScreenResolution';
const BreadCrumb = () => {
  let path = usePathname();
  let pathArray = path.split("/");
  const {isMobile} = useScreenResolution();

  return (
    <Flex
      gap={isMobile ? "1rem" : "1.4rem"}
      align="center"
      margin="1rem 0"
      wrap="wrap"
    >
      <Link href="/">
        <Text
          type="p"
          text="Home"
          size="1.5rem"
          weight='regular'
          underline="underline"
        />
      </Link>
      <ArrowRight />
      {pathArray.map((item, index) => {
        if (item === "") {
          return null;
        }
        item = item.replace(/-/g, " ");
        if (index === pathArray.length - 1) {
          return (
            <Text
              key={index}
              type="p"
              text={capitalized(item)}
              size="1.5rem"
              weight={200}
            />
          );
        }
        return (
          <Flex key={index} width="fit-content" align="center" gap="1.4rem">
            <Link href={pathArray.slice(0, index + 1).join("/")}>
              <Text
                type="p"
                text={capitalized(item)}
                size="1.5rem"
                weight='regular'
                underline="underline"
                whiteSpace="nowrap"
              />
            </Link>
            <ArrowRight />
          </Flex>
        );
      })}
    </Flex>
  );
};

export default BreadCrumb;
