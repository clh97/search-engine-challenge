import React, { forwardRef } from "react";

import InputStyles from "./Input.styles";

const Input = forwardRef((props, ref) => {
  return <InputStyles.Input ref={ref} {...props} />;
});

export default Input;
