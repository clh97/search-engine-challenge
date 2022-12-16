import React from "react";

import NotFoundScreenStyles from "./NotFoundScreen.styles";

const NotFoundScreen = () => {
  return (
    <NotFoundScreenStyles.Container>
      <NotFoundScreenStyles.Title>404</NotFoundScreenStyles.Title>
      <NotFoundScreenStyles.Subtitle>
        Page not found
      </NotFoundScreenStyles.Subtitle>
      <NotFoundScreenStyles.Link to="/">Go to home</NotFoundScreenStyles.Link>
    </NotFoundScreenStyles.Container>
  );
};

export default NotFoundScreen;
