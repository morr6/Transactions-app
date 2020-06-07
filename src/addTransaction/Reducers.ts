import { TOOGLE_MODAL, ADD_TRANSACTION, transitionsTypes } from "./Types";

const initialState = {
  modal: false,
  transitions: [],
};

export const isModalOpen = (
  state = initialState.modal,
  action: transitionsTypes
) => {
  switch (action.type) {
    case TOOGLE_MODAL:
      return !state;
    default:
      return state;
  }
};

export const transitions = (
  state = initialState.transitions,
  action: transitionsTypes
) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return action.transitions;
    default:
      return state;
  }
};
