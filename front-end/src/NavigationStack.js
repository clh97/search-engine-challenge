import { createBrowserRouter } from "react-router-dom";
import NotFoundScreen from "./screens/NotFoundScreen/NotFoundScreen";

import SearchScreen from "./screens/SearchScreen/SearchScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchScreen />,
    errorElement: <NotFoundScreen />,
  },
]);
