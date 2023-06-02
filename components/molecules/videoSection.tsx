"use client";

import Flex from "atom/flex";
import React from "react";
import SectionAside from "./sectionAside";
import VideoFilter from "./videoFilter";
import { Section } from "@/types";
import { useScreenResolution } from "hook/useScreenResolution";

function VideoArticleSection({
  children,
  subCategories,
  subCategory,
}: {
  children: React.ReactNode;
  subCategories: Section[];
  subCategory: Section["name"];
}) {
  const { isMobile } = useScreenResolution();
  return (
    <Flex
      gap="4rem"
      justify="space-between"
      overflow="unset"
      direction={isMobile ? "column" : "row"}
    >
      {!isMobile && (
        <SectionAside subCategories={subCategories} subCategory={subCategory} />
      )}
      <main
        style={{ width: isMobile ? "100%" : "80%", transition: "all 1s ease" }}
        className={`w-full min-w-0  mt-${isMobile ? "4" : "0"}`}
      >
        <VideoFilter />
        {children}
      </main>
    </Flex>
  );
}

export default VideoArticleSection;
