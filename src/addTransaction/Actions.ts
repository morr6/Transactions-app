import { TOOGLE_MODAL, ADD_TRANSACTION, transitionsTypes } from "./Types";

export const toogleModal = (): transitionsTypes => ({
  type: TOOGLE_MODAL,
});

export const addTransition = (transitions): transitionsTypes => ({
  type: ADD_TRANSACTION,
  transitions,
});
