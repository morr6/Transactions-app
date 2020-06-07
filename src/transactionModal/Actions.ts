import { TOOGLE_MODAL, ADD_TRANSACTIONS, transactionsTypes } from "./Types";

export const toogleModal = (): transactionsTypes => ({
  type: TOOGLE_MODAL,
});

export const addTransitions = (transactions): transactionsTypes => ({
  type: ADD_TRANSACTIONS,
  transactions,
});
