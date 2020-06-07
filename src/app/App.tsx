import React, { useEffect } from "react";
import { GlobalStyle } from "utilities/GlobalStyles";
import { initLocalStorage } from "storage/LocalStorage";

import { Homepage } from "homepage/Homepage";

export const App = () => {
  useEffect(() => {
    initLocalStorage();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Homepage />
    </>
  );
};
