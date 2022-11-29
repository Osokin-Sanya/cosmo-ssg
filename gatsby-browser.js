import React from "react";
import { AppProvider } from "./src/features/store";

import "./src/pages/global.scss";

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);
