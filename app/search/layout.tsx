import { Divider } from "@/components/atoms/divider";
import SectionLayout from "@/components/molecules/sectionLayout";
import { Qparams } from "@/types";
import SearchHero from "molecule/searchHero";

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
        <SearchHero />
      </SectionLayout>
      <Divider margin="0" />
      {children}
    </div>
  );
}
