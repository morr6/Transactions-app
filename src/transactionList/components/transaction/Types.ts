export const ADD_TRANSACTION_ID_TO_DELETE = "ADD_TRANSACTION_ID_TO_DELETE";
export const DELETE_TRANSACTION_ID_FROM_TABLE =
  "DELETE_TRANSACTION_ID_FROM_TABLE";
export const CLEAR_ID_TABLE = "CLEAR_ID_TABLE";

interface addToDelete {
  type: typeof ADD_TRANSACTION_ID_TO_DELETE;
  id: number;
}

interface deleteFromTable {
  type: typeof DELETE_TRANSACTION_ID_FROM_TABLE;
  id: number;
}

interface clearTable {
  type: typeof CLEAR_ID_TABLE;
}

export type idToDeleteArrayTypes = addToDelete | deleteFromTable | clearTable;
