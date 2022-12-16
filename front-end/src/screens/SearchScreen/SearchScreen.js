import React, { useRef, useState } from "react";
import { search } from "../../api";

import Button from "../../components/generic/Button/Button";
import Input from "../../components/generic/Input/Input";

import SearchResults from "../../components/SearchResults/SearchResults";

import SearchScreenStyles from "./SearchScreen.styles";

const SearchScreen = () => {
  const inputRef = useRef(null);
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const query = inputRef.current.value;

    search(query).then((response) => {
      if (!response.data.success) {
        throw new Error(`Error searching for query: ${query}`);
      }

      const { data: results } = response.data;

      setResults(results);
    });
  };

  const onInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchScreenStyles.Container>
      <SearchScreenStyles.SearchSection>
        <Input ref={inputRef} type="search" onKeyDown={onInputKeyDown} />
        <Button text="Search" onClick={handleSearch} />
      </SearchScreenStyles.SearchSection>
      <SearchScreenStyles.SearchResultsSection>
        <SearchResults results={results} />
      </SearchScreenStyles.SearchResultsSection>
    </SearchScreenStyles.Container>
  );
};

export default SearchScreen;
