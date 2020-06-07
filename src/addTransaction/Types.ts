export const TOOGLE_MODAL = "TOOGLE_MODAL";
export const ADD_TRANSACTIONS = "ADD_TRANSACTIONS";

interface toogleModal {
  type: typeof TOOGLE_MODAL;
}

interface transition {
  id?: number;
  name: string;
  euroValue: number;
  date: string;
}

interface addTransitions {
  type: typeof ADD_TRANSACTIONS;
  transactions: transition[];
}

export type transactionsTypes = toogleModal | addTransitions;
