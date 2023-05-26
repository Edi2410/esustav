import React from "react";
import { HomePage } from "../pages/eIzbori/HomePage";
import { Results } from "../pages/eIzbori/Results";

interface Routes {
  path: string;
  element: JSX.Element;
  key: string;
}
export const routes: Routes[] = [
  {
    path: "/",
    element: <HomePage />,
    key: "/",
  },
  {
    path: "/results",
    element: <Results />,
    key: "/results",
  },
];
