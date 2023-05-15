import ListingTypeTab from "@/components/molecules/listingTypeTab";
import SearchResults from "@/components/molecules/searchResult";
import SectionLayout from "@/components/molecules/sectionLayout";
import React from "react";

function SearchResult() {
  return (
    <SectionLayout>
      <ListingTypeTab />

      <div style={{margin:'2rem 0'}}>
        <SearchResults />
      </div>
    </SectionLayout>
  );
}

export default SearchResult;
