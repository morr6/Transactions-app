export const TOOGLE_MODAL = "TOOGLE_MODAL";
export const ADD_TRANSACTION = "ADD_TRANSACTION";

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
  type: typeof ADD_TRANSACTION;
  transitions: transition[];
}

export type transitionsTypes = toogleModal | addTransitions;
