import { TOOGLE_MODAL, ADD_TRANSACTIONS, transactionsTypes } from './Types';
import { transaction } from 'app/selectors/selectors';

export const toogleModal = (): transactionsTypes => ({
  type: TOOGLE_MODAL,
});

export const addTransitions = (transactions: transaction[]): transactionsTypes => ({
  type: ADD_TRANSACTIONS,
  transactions,
});
