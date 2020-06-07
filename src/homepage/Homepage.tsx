import React from "react";
import { Grid } from "@material-ui/core";
import { GridWrapper } from "./Homepage.s";
import { Button } from "app/components/button/Button";
import { CurrencyRate } from "currencyRate/CurrencyRate";
import { TransactionList } from "transactionList/TransactionList";

export const Homepage: React.FC = () => {
  return (
    <GridWrapper container alignItems="center" justify="center" spacing={2}>
      <Grid item xs={8}>
        <CurrencyRate />
      </Grid>
      <Grid item xs={8} container>
        <Grid item md={7} />
        <Grid item sm={2}>
          <Button text="add" fc={() => console.log("add")} />
        </Grid>
        <Grid item md={1} />
        <Grid item sm={2}>
          <Button text="delete" fc={() => console.log("delete")} />
        </Grid>
      </Grid>

      <Grid item xs={8}>
        <TransactionList />
      </Grid>
    </GridWrapper>
  );
};
