import styled from "styled-components";
import { Link as DOMLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100%;
  padding: 1rem;
`;

const Link = styled(DOMLink)`
  color: cornflowerblue;
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  max-height: 600px;
  margin: 1rem 0;
  border-radius: 7px;
`;

const Date = styled.small`
  font-size: 0.8rem;
  font-weight: 300;
`;

const ArticleScreenStyles = {
  Container,
  Link,
  Title,
  Description,
  Image,
  Date,
};

export default ArticleScreenStyles;
