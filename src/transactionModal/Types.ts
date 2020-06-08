import { transaction } from 'app/selectors/selectors';

export const TOOGLE_MODAL = 'TOOGLE_MODAL';
export const ADD_TRANSACTIONS = 'ADD_TRANSACTIONS';

interface toogleModal {
  type: typeof TOOGLE_MODAL;
}

interface addTransitions {
  type: typeof ADD_TRANSACTIONS;
  transactions: transaction[];
}

export type transactionsTypes = toogleModal | addTransitions;
