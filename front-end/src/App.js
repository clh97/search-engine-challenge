import React from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./NavigationStack";
import { GlobalStyles } from "./global.styles";

const App = () => (
  <>
    <GlobalStyles />
    <main>
      <RouterProvider router={router} />
    </main>
  </>
);

export default App;
