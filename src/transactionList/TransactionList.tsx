import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { ListWrapper, Header } from "./TransactionList.s";
import { Transaction } from "./components/transaction/Transaction";

import { useSelector } from "react-redux";

interface transaction {
  id: number;
  name: string;
  euroValue: number;
  transactionDate: string;
}

interface Store {
  transactions: transaction[];
}

export const TransactionList: React.FC = () => {
  const transactions = useSelector((store: Store) => store.transactions);

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
            NAME
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
