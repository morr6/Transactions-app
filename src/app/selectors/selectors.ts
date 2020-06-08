export interface transaction {
  name: string;
  euroValue: number;
  date?: string;
  id?: number;
}

interface Store {
  plnRate: number;
  isApiLoading: boolean;
  isModalOpen: boolean;
  transactions: transaction[];
  deleteMode: boolean;
  idsToDelete: number[];
}

export const selectPlnRate = (store: Store) => store.plnRate;
export const selectApiLoading = (store: Store) => store.isApiLoading;
export const selectIsModalOpen = (store: Store) => store.isModalOpen;
export const selectTransactions = (store: Store) => store.transactions;
export const selectDeleteMode = (store: Store) => store.deleteMode;
export const selectIdsToDeleteArray = (store: Store) => store.idsToDelete;
