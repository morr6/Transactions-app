import React from "react";
import { TransitionWrapper } from "./Transaction.s";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

interface Props {
  transaction: {
    name: string;
    euroValue: number;
    transactionDate: string;
    id?: number;
  };
}

interface Store {
  plnRate: number;
}

export const Transaction: React.FC<Props> = ({ transaction }: Props) => {
  const plnRate = useSelector((store: Store) => store.plnRate);

  const { name, euroValue, transactionDate } = transaction;

  return (
    <TransitionWrapper>
      <Grid container>
        <Grid item xs={6}>
          {name}
        </Grid>
        <Grid item xs={2}>
          {Number(euroValue).toFixed(2)} EUR
        </Grid>
        <Grid item xs={2}>
          {(euroValue * plnRate).toFixed(2)} PLN
        </Grid>
        <Grid item xs={2}>
          {transactionDate}
        </Grid>
      </Grid>
    </TransitionWrapper>
  );
};
