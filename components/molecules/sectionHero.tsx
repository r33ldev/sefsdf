"use client";

import Link from "atom/link";
import Text from "atom/text";
import { useScreenResolution } from "hook/useScreenResolution";
import HelpCenterSearchBar from "./helpCenterSearchBar";

function SectionHero({
  title,
  description,
  showSearch = true,
}: {
  title: string;
  description: string;
  showSearch?: boolean;
}) {
  const { isMobile } = useScreenResolution();
  return (
    <div>
      <Link href="/">
        <Text text={title} type="h1" size={isMobile ? 30 : 48} weight={600} />
      </Link>
      <Text text={description} type="h1" size={isMobile ? "2rem" : "2.3rem"} />
      {showSearch && <HelpCenterSearchBar margin="2rem 0" />}
    </div>
  );
}

export default SectionHero;
