import { TOOGLE_MODAL, ADD_TRANSACTIONS, transactionsTypes } from "./Types";

const initialState = {
  modal: false,
  transactions: [],
};

export const isModalOpen = (
  state = initialState.modal,
  action: transactionsTypes
) => {
  switch (action.type) {
    case TOOGLE_MODAL:
      return !state;
    default:
      return state;
  }
};

export const transactions = (
  state = initialState.transactions,
  action: transactionsTypes
) => {
  switch (action.type) {
    case ADD_TRANSACTIONS:
      return action.transactions;
    default:
      return state;
  }
};
