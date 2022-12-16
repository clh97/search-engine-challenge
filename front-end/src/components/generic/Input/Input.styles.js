import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  display: inline-block;
  width: ${({ width }) => width || "240px"};
  min-height: 42px;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputStyles = {
  Input,
};

export default InputStyles;
