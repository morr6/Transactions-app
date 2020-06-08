import React from "react";
import { GlobalStyle } from "utilities/GlobalStyles";

import { Homepage } from "homepage/Homepage";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Homepage />
    </>
  );
};
