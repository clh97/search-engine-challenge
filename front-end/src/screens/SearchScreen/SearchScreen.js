import React from "react";

import Button from "../../components/generic/Button/Button";
import Input from "../../components/generic/Input/Input";

import SearchResults from "../../components/SearchResults/SearchResults";

import SearchScreenStyles from "./SearchScreen.styles";

const SearchScreen = () => {
  return (
    <SearchScreenStyles.Container>
      <SearchScreenStyles.SearchSection>
        <Input width="240px" type="search" />
        <Button text="Search" />
      </SearchScreenStyles.SearchSection>
      <SearchScreenStyles.SearchResultsSection>
        <SearchResults
          results={[
            {
              id: 1,
              title: "Title 1",
              description: "Description 1",
              photo: "https://picsum.photos/500/500",
            },
          ]}
        />
      </SearchScreenStyles.SearchResultsSection>
    </SearchScreenStyles.Container>
  );
};

export default SearchScreen;
