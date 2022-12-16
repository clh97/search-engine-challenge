import React from "react";

import ButtonStyles from "./Button.styles";

const Button = ({ text, onClick }) => {
  return <ButtonStyles.Button onClick={onClick}>{text}</ButtonStyles.Button>;
};

export default Button;
