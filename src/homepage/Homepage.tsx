import React from "react";
import { Grid } from "@material-ui/core";
import { GridWrapper } from "./Homepage.s";

import { Button } from "app/components/button/Button";
import { CurrencyRate } from "currencyRate/CurrencyRate";
import { TransactionList } from "transactionList/TransactionList";
import { AddTransactionModal } from "addTransaction/AddTransaction";

import { useDispatch, useSelector } from "react-redux";
import { toogleModal } from "addTransaction/Actions";

interface Store {
  isModalOpen: boolean;
}

export const Homepage: React.FC = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((store: Store) => store.isModalOpen);

  const openModal = () => {
    if (!isModalOpen) {
      dispatch(toogleModal());
    }
  };

  return (
    <GridWrapper container alignItems="center" justify="center" spacing={2}>
      <Grid item xs={8}>
        <CurrencyRate />
      </Grid>
      <Grid item xs={8} container>
        <Grid item md={7} />
        <Grid item sm={2}>
          <Button text="add" fullWidth click={() => openModal()} />
        </Grid>
        <Grid item md={1} />
        <Grid item sm={2}>
          <Button text="delete" fullWidth click={() => console.log("delete")} />
        </Grid>
      </Grid>

      <Grid item xs={8}>
        <TransactionList />
      </Grid>

      <AddTransactionModal />
    </GridWrapper>
  );
};
