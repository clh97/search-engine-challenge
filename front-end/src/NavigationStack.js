import { createBrowserRouter } from "react-router-dom";

import NotFoundScreen from "./screens/NotFoundScreen/NotFoundScreen";

import SearchScreen from "./screens/SearchScreen/SearchScreen";
import ArticleScreen from "./screens/ArticleScreen/ArticleScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchScreen />,
    errorElement: <NotFoundScreen />,
  },
  {
    path: "/article/:id",
    element: <ArticleScreen />,
    errorElement: <NotFoundScreen />,
  },
]);
