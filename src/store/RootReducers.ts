import { combineReducers } from 'redux';
import { plnRate } from 'currencyRate/Reducers';
import { isModalOpen, transactions } from 'transactionModal/Reducers';
import { isApiLoading } from 'utilities/api/Reducers';
import { deleteMode } from 'homepage/Reducers';
import { idsToDelete } from 'transactionList/components/transaction/Reducers';

export const rootReducer = combineReducers({
  plnRate,
  isApiLoading,
  isModalOpen,
  transactions,
  deleteMode,
  idsToDelete,
});
