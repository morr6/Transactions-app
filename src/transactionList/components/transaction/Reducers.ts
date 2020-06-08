import {
  idToDeleteArrayTypes,
  ADD_TRANSACTION_ID_TO_DELETE,
  DELETE_TRANSACTION_ID_FROM_TABLE,
  CLEAR_ID_TABLE,
} from "./Types";

const initialState: number[] = [];

export const idsToDelete = (
  state = initialState,
  action: idToDeleteArrayTypes
) => {
  switch (action.type) {
    case ADD_TRANSACTION_ID_TO_DELETE:
      return [...state, action.id];
    case DELETE_TRANSACTION_ID_FROM_TABLE:
      return state.filter((id) => id !== action.id);
    case CLEAR_ID_TABLE:
      return state.filter((id) => !id);
    default:
      return state;
  }
};
