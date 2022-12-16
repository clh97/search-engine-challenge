import { Link as DOMLink } from "react-router-dom";
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

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
`;

const Link = styled(DOMLink)`
  color: cornflowerblue;
  text-decoration: none;
`;

const NotFoundScreenStyles = {
  Container,
  Title,
  Subtitle,
  Link,
};

export default NotFoundScreenStyles;
