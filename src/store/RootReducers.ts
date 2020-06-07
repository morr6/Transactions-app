import { combineReducers } from "redux";
import { plnRate } from "currencyRate/Reducers";
import { isApiLoading } from "utilities/api/Reducers";

export const rootReducer = combineReducers({ plnRate, isApiLoading });
