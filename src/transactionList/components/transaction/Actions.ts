import {
  idToDeleteArrayTypes,
  ADD_TRANSACTION_ID_TO_DELETE,
  DELETE_TRANSACTION_ID_FROM_TABLE,
  CLEAR_ID_TABLE,
} from "./Types";

export const addIdToDeleteArray = (id: number): idToDeleteArrayTypes => ({
  type: ADD_TRANSACTION_ID_TO_DELETE,
  id,
});

export const deleteTransactionIdFromArray = (
  id: number
): idToDeleteArrayTypes => ({
  type: DELETE_TRANSACTION_ID_FROM_TABLE,
  id,
});

export const clearIdTable = () => ({
  type: CLEAR_ID_TABLE,
});
