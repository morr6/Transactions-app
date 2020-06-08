import { TOOGLE_API_LOADING, apiLoadingType } from "./Types";

const initialState: boolean = false;

export const isApiLoading = (state = initialState, action: apiLoadingType) => {
  switch (action.type) {
    case TOOGLE_API_LOADING:
      return !state;
    default:
      return state;
  }
};
