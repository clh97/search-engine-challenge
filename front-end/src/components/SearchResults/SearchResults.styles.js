import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 720px;
  height: 100%;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  font-weight: bold;
`;

const List = styled.ul`
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;

const ListItemImageContainer = styled.div``;

const ListItemImage = styled.img`
  width: 150px;
  height: 150px;
`;

const ListItemTitle = styled.h3``;

const ListItemDescription = styled.span``;

const SearchResultsStyles = {
  Container,
  Title,
  List,
  ListItem,
  ListItemImageContainer,
  ListItemImage,
  ListItemTitle,
  ListItemDescription,
};

export default SearchResultsStyles;
