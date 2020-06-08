import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import {
  ListWrapper,
  Header,
  NameWrapper,
  SumValue,
} from "./TransactionList.s";
import { Transaction } from "./components/transaction/Transaction";

import { useSelector } from "react-redux";
import {
  selectTransactions,
  transaction,
  selectPlnRate,
} from "app/selectors/selectors";

export const TransactionList: React.FC = () => {
  const transactions = useSelector(selectTransactions);
  const plnRate = useSelector(selectPlnRate);

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const updateCurrentPage = () => {
      const pageCount: number = Math.ceil(transactions.length / 6);

      if (page > pageCount && pageCount !== 0) {
        setPage(pageCount);
      }
    };

    updateCurrentPage();
  }, [transactions]);

  const slicedTransactions = (): Array<transaction> => {
    const start: number = page === 1 ? 0 : (page - 1) * 6;
    const end: number = start + 6;

    return transactions.slice(start, end);
  };

  const handlePageChange = (page): void => {
    setPage(page);
  };

  const countTransactionsSum = (): number => {
    let sum: number = 0;

    transactions.map((transaction) => (sum += Number(transaction.euroValue)));

    return sum;
  };

  return (
    <>
      <Header>
        <Grid container>
          <Grid item xs={6}>
            <NameWrapper>NAME</NameWrapper>
          </Grid>
          <Grid item xs={2}>
            EUR
          </Grid>
          <Grid item xs={2}>
            PLN
          </Grid>
          <Grid item xs={2}>
            DATE
          </Grid>
        </Grid>
      </Header>

      <ListWrapper>
        {slicedTransactions().map((transaction, key) => (
          <Transaction transaction={transaction} key={key} />
        ))}
      </ListWrapper>

      <Grid container>
        <Grid item xs={6}>
          <Pagination
            count={Math.ceil(transactions.length / 6) || 1}
            size="large"
            color="primary"
            page={page}
            onChange={(_, page) => handlePageChange(page)}
          />
        </Grid>
        <Grid item xs={2}>
          <SumValue>{countTransactionsSum().toFixed(2)} EUR</SumValue>
        </Grid>
        <Grid item xs={2}>
          <SumValue>
            {(countTransactionsSum() * plnRate).toFixed(2)} PLN
          </SumValue>
        </Grid>
      </Grid>
    </>
  );
};
