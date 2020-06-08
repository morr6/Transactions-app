import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { ListWrapper, Header, NameWrapper } from "./TransactionList.s";
import { Transaction } from "./components/transaction/Transaction";

import { useSelector } from "react-redux";
import { selectTransactions, transaction } from "app/selectors/selectors";

export const TransactionList: React.FC = () => {
  const transactions = useSelector(selectTransactions);

  const [page, setPage] = useState<number>(1);

  const slicedTransactions = (): Array<transaction> => {
    const start: number = page === 1 ? 0 : (page - 1) * 6;
    const end: number = start + 6;

    return transactions.slice(start, end);
  };

  const handlePageChange = (page) => {
    setPage(page);
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

      <Pagination
        count={Math.ceil(transactions.length / 6)}
        size="large"
        color="primary"
        onChange={(_, page) => handlePageChange(page)}
      />
    </>
  );
};
