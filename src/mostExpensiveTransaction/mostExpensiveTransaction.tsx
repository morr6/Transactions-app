import React from 'react';
import { Grid } from '@material-ui/core';
import { Title, TransactionWrapper } from './mostExpensiveTransaction.s';
import { useSelector } from 'react-redux';
import { selectTransactions, selectPlnRate } from 'app/selectors/selectors';
import { transaction } from 'app/selectors/selectors';

export const MostExpensiveTransaction: React.FC = () => {
  const transactions = useSelector(selectTransactions);
  const plnRate = useSelector(selectPlnRate);

  const getMostExpensiveTransaction = (): transaction => {
    return (
      transactions &&
      transactions.filter(
        (transaction) =>
          Number(transaction.euroValue) === Math.max(...transactions.map((el) => el.euroValue)),
      )[0]
    );
  };

  const renderTransaction = () => {
    if (getMostExpensiveTransaction()) {
      const { name, euroValue, date } = getMostExpensiveTransaction();

      return (
        <Grid container alignItems="center" justify="space-around">
          <Grid item xs={6}>
            {name}
          </Grid>
          <Grid item xs={2}>
            {Number(euroValue).toFixed(2)} EUR
          </Grid>
          <Grid item xs={2}>
            {Number(euroValue * plnRate).toFixed(2)} PLN
          </Grid>
          <Grid item xs={2}>
            {date}
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <>
      <Title>most expensive transaction</Title>
      <TransactionWrapper>{renderTransaction()}</TransactionWrapper>
    </>
  );
};
