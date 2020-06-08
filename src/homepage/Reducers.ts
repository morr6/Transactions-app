import { TOOGLE_DELETE_MODE, deleteModeType } from "./Types";

const initialState: boolean = false;

export const deleteMode = (state = initialState, action: deleteModeType) => {
  switch (action.type) {
    case TOOGLE_DELETE_MODE:
      return !state;
    default:
      return state;
  }
};
