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

const SearchContainer = styled.div`
  width: 320px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const SearchScreenStyles = {
  Container,
  SearchContainer,
};

export default SearchScreenStyles;
