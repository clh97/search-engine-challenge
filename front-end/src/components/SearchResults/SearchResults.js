import React from "react";

import SearchResultsStyles from "./SearchResults.styles";

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return (
      <SearchResultsStyles.Container>
        <SearchResultsStyles.ErrorMessage>
          Empty...
        </SearchResultsStyles.ErrorMessage>
      </SearchResultsStyles.Container>
    );
  }

  return (
    <SearchResultsStyles.Container>
      <SearchResultsStyles.Title>Search Results</SearchResultsStyles.Title>
      <SearchResultsStyles.List>
        {results.map((result) => (
          <SearchResultsStyles.ListItem key={result.id}>
            <SearchResultsStyles.ListItemImageContainer>
              <SearchResultsStyles.ListItemImage src={result.photo} />
            </SearchResultsStyles.ListItemImageContainer>
            <SearchResultsStyles.ListItemContentContainer>
              <SearchResultsStyles.ListItemTitle>
                {result.title}
              </SearchResultsStyles.ListItemTitle>
              <SearchResultsStyles.ListItemDescription>
                {result.shortDescription}
              </SearchResultsStyles.ListItemDescription>
            </SearchResultsStyles.ListItemContentContainer>
          </SearchResultsStyles.ListItem>
        ))}
      </SearchResultsStyles.List>
    </SearchResultsStyles.Container>
  );
};

export default SearchResults;
