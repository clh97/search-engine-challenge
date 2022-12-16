import styled from "styled-components";
import { Link as DOMLink } from "react-router-dom";

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
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 160px;
  height: 160px;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 7px;
  transition: background-color 0.3s ease-in-out;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ListItemLink = styled(DOMLink)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const ListItemImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

const ListItemImage = styled.img`
  width: 100%;
  height: calc(720px / 5);
`;

const ListItemContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

const ListItemTitle = styled.h3`
  align-self: flex-start;
  justify-self: flex-start;
  font-size: 1.5rem;
`;

const ListItemDescription = styled.span`
  align-self: flex-start;
  line-break: anywhere;
`;

const ErrorMessage = styled.span``;

const SearchResultsStyles = {
  Container,
  Title,
  List,
  ListItem,
  ListItemLink,
  ListItemImageContainer,
  ListItemImage,
  ListItemContentContainer,
  ListItemTitle,
  ListItemDescription,
  ErrorMessage,
};

export default SearchResultsStyles;
