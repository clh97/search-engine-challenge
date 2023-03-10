import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  padding: 1rem;
`;

const SearchSection = styled.section`
  width: 320px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const SearchResultsSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const SearchScreenStyles = {
  Container,
  SearchSection,
  SearchResultsSection,
};

export default SearchScreenStyles;
