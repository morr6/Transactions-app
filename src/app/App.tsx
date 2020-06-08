import React, { useEffect } from 'react';
import { GlobalStyle } from 'utilities/GlobalStyles';
import { initLocalStorage } from 'storage/LocalStorage';
import { Homepage } from 'homepage/Homepage';

import { useDispatch } from 'react-redux';
import { addTransitions } from 'transactionModal/Actions';
import { getTransactionsFromStorage } from 'storage/LocalStorage';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Homepage />
    </>
  );
};
