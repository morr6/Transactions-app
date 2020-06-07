import { SET_PLN_RATE, RateActionType, RateState } from "./Types";

const initialState: number = 0;

export const plnRate = (state = initialState, action: RateActionType) => {
  switch (action.type) {
    case SET_PLN_RATE:
      return action.plnRate;
    default:
      return state;
  }
};
