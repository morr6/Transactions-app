import { RateActionType, SET_PLN_RATE } from "./Types";

export const setPlnRate = (plnRate: number): RateActionType => ({
  type: SET_PLN_RATE,
  plnRate,
});
