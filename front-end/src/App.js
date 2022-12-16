import React from "react";

import { GlobalStyles } from "./global.styles";

import SearchScreen from "./screens/SearchScreen/SearchScreen";

const App = () => (
  <>
    <GlobalStyles />
    <main>
      {/* In a production project I would use react-router here to manage the routes,
          but in this case I'll just render the screen directly */}
      <SearchScreen />
    </main>
  </>
);

export default App;
