export const SET_PLN_RATE = "SET_PLN_RATE";

interface setRate {
  type: typeof SET_PLN_RATE;
  plnRate: number;
}

export interface RateState {
  plnRate: number;
}

export type RateActionType = setRate;
