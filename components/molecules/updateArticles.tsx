"use client";

import { QualityUpdate } from "@/types";
import { useState } from "react";
import styled from "styled-components";
import { Divider } from "../atoms/divider";
import Flex from "../atoms/flex";
import Link from "../atoms/link";
import Text from "../atoms/text";
import CheckinLogo from "../icons/checkinLogo";
import ListingTypeTab from "./listingTypeTab";
import Pagination from "./pagination";
import SectionLayout from "./sectionLayout";

interface UpdateArticlesProps {
  repeatedArticles: QualityUpdate[];
}

const LogoImage = styled.div`
  border-radius: 1.6rem;
  background-color: #f9f9fc;
  width: 14rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function UpdateArticles({ repeatedArticles }: UpdateArticlesProps) {
  const [limit, _setLimit] = useState(5);
  const [shownArticles, setShownArticles] = useState<QualityUpdate[]>(
    repeatedArticles.slice(0, limit)
  );
  const [page, setPage] = useState(1);
  const onChange = (page: number) => {
    setPage(page);
    setShownArticles(repeatedArticles.slice((page - 1) * limit, page * limit));
  };
  return (
    <div>
      <ListingTypeTab />
      <SectionLayout margin="4rem auto">
        <main style={{ maxWidth: "80%" }}>
          {shownArticles.map((article) => (
            <Link href={`/quality-updates/${article.url}`} key={article.id}>
              <Flex gap="2rem" margin="2rem 0">
                <LogoImage>
                  <CheckinLogo size={60} />
                </LogoImage>
                <Flex
                  direction="column"
                  justify="space-between"
                  padding="1rem 0"
                >
                  <Text
                    text={article.title}
                    type="h1"
                    size="2.2rem"
                    weight={900}
                  />
                  <Text
                    text={article.description.slice(0, 100)}
                    type="p"
                    size="1.5rem" color='#363636'
                  />
                  <Text text={article.createdAt} type="p" size="1.5rem" color='#363636' />
                </Flex>
              </Flex>
              <Divider />
            </Link>
          ))}
          <Pagination
            onChange={onChange}
            total={repeatedArticles.length}
            current={page}
            limit={limit}
          />
        </main>
      </SectionLayout>
    </div>
  );
}

export default UpdateArticles;
