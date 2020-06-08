import React from 'react';
import { Grid } from '@material-ui/core';
import { GridWrapper } from './Homepage.s';

import { Button } from 'app/components/button/Button';
import { CurrencyRate } from 'currencyRate/CurrencyRate';
import { TransactionList } from 'transactionList/TransactionList';
import { TransactionModal } from 'transactionModal/TransactionModal';
import { MostExpensiveTransaction } from 'mostExpensiveTransaction/mostExpensiveTransaction';

import { useDispatch, useSelector } from 'react-redux';
import { toogleModal, addTransitions } from 'transactionModal/Actions';
import { toogleDeleteMode } from './Actions';
import { selectDeleteMode, selectIdsToDeleteArray } from 'app/selectors/selectors';

import { clearIdTable } from 'transactionList/components/transaction/Actions';
import { deleteTransactionFromStorage, getTransactionsFromStorage } from 'storage/LocalStorage';

export const Homepage: React.FC = () => {
  const dispatch = useDispatch();
  const deleteMode = useSelector(selectDeleteMode);
  const idsToDelete = useSelector(selectIdsToDeleteArray);

  const toogleModalHandler = (): void => {
    dispatch(toogleModal());
  };

  const toogleDeleteModeHandler = (): void => {
    dispatch(toogleDeleteMode());
    dispatch(clearIdTable());
  };

  const deleteTransaction = (): void => {
    deleteTransactionFromStorage(idsToDelete);
    dispatch(addTransitions(getTransactionsFromStorage()));
    dispatch(clearIdTable());
    dispatch(toogleDeleteMode());
  };

  return (
    <GridWrapper container alignItems="center" justify="center" spacing={5}>
      <Grid item xs={3}>
        <CurrencyRate />
      </Grid>
      <Grid item xs={5}>
        <MostExpensiveTransaction />
      </Grid>

      <Grid item xs={8} container>
        <Grid item md={7} />
        <Grid item sm={2}>
          <Button
            text={deleteMode ? 'confirm' : 'add'}
            fullWidth
            click={deleteMode ? deleteTransaction : toogleModalHandler}
          />
        </Grid>
        <Grid item md={1} />
        <Grid item sm={2}>
          <Button
            text={deleteMode ? 'cancel' : 'delete'}
            fullWidth
            click={toogleDeleteModeHandler}
          />
        </Grid>
      </Grid>

      <Grid item xs={8}>
        <TransactionList />
      </Grid>

      <TransactionModal />
    </GridWrapper>
  );
};
