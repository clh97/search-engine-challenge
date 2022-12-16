import styled from "styled-components";

const Button = styled.button`
  min-height: 42px;
  padding: 0.5rem 0.75rem;
  background: #3498db;
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  color: #ffffff;
  border: none;
  border-radius: 7px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #3cb0fd;
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

const ButtonStyles = {
  Button,
};

export default ButtonStyles;
