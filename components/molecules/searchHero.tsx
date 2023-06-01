"use client";

import Link from "atom/link";
import Text from "atom/text";
import React from "react";
import HelpCenterSearchBar from "./helpCenterSearchBar";
import { useScreenResolution } from "hook/useScreenResolution";

function SearchHero() {
  const { isMobile } = useScreenResolution();
  return (
    <div>
      <Link href="/search">
        <Text
          text="Search result"
          type="h1"
          size={isMobile ? 30 : 48}
          weight={600}
        />
      </Link>
      <Text
        text="Checkin Support - search results"
        type="h1"
        size={isMobile ? "2rem" : "2.3rem"}
      />
      <HelpCenterSearchBar margin="2rem 0" />
    </div>
  );
}

export default SearchHero;
