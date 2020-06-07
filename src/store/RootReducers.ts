import { combineReducers } from "redux";
import { plnRate } from "currencyRate/Reducers";
import { isModalOpen, transactions } from "transactionModal/Reducers";
import { isApiLoading } from "utilities/api/Reducers";

export const rootReducer = combineReducers({
  plnRate,
  isApiLoading,
  isModalOpen,
  transactions,
});
