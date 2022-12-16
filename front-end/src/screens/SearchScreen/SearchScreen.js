import React from "react";

import Button from "../../components/generic/Button/Button";
import Input from "../../components/generic/Input/Input";

import SearchScreenStyles from "./SearchScreen.styles";

const SearchScreen = () => {
  return (
    <SearchScreenStyles.Container>
      <SearchScreenStyles.SearchContainer>
        <Input width="240px" type="search" />
        <Button text="Search" />
      </SearchScreenStyles.SearchContainer>
    </SearchScreenStyles.Container>
  );
};

export default SearchScreen;
