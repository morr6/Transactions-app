import React from "react";
import { Grid } from "@material-ui/core";
import { ListWrapper, Header } from "./TransactionList.s";
import { Transaction } from "./components/transaction/Transaction";

import { useSelector } from "react-redux";

interface Store {
  transactions: [
    {
      id: number;
      name: string;
      euroValue: number;
      transactionDate: string;
    }
  ];
}

export const TransactionList: React.FC = () => {
  const transactions = useSelector((store: Store) => store.transactions);

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
        {transactions &&
          transactions.map((transaction, key) => (
            <Transaction transaction={transaction} key={key} />
          ))}
      </ListWrapper>
    </>
  );
};
