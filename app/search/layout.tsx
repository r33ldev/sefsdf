import { Divider } from "@/components/atoms/divider";
import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";
import HelpCenterSearchBar from "@/components/molecules/helpCenterSearchBar";
import SectionLayout from "@/components/molecules/sectionLayout";
import { Qparams } from "@/types";

interface pageProps {
  children: React.ReactNode;
  params: Qparams["params"];
}

export const generateMetadata = () => {
  return {
    title: {
      default: "Search Results",
      template: "%s - Search Results",
    },
    description: "Checkin Search",
  };
};

export default async function SearchLayout({ children }: pageProps) {
  return (
    <div>
      <SectionLayout>
        <Link href="/search">
          <Text text="Search result" type="h1" size={48} weight={600} />
        </Link>
        <Text text="Checkin Support - search results" type="h1" size="2.3rem" />
        <HelpCenterSearchBar margin="2rem 0" />
      </SectionLayout>
      <Divider margin="0" />
      {children}
    </div>
  );
}
