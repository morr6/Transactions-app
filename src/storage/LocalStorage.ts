import { transaction as transitionProps } from "app/selectors/selectors";

export const getTransactionsFromStorage = () => {
  let transactions = JSON.parse(localStorage.getItem("transactions") as string);

  return transactions;
};

export const initLocalStorage = (): void => {
  if (!getTransactionsFromStorage()) {
    localStorage.setItem("transactions", JSON.stringify([]));
  }
};

export const generateTransactionId = (): number => {
  let transactions = getTransactionsFromStorage();
  return transactions.length ? transactions[0].id + 1 : 1;
};

export const addTransactionToStorage = ({
  name,
  euroValue,
  date,
}: transitionProps): void => {
  const newName = name.charAt(0).toUpperCase() + name.slice(1);

  localStorage.setItem(
    "transactions",
    JSON.stringify([
      {
        id: getTransactionsFromStorage() && generateTransactionId(),
        name: newName,
        euroValue: euroValue,
        date: date,
      },
      ...getTransactionsFromStorage(),
    ])
  );
};

export const deleteTransactionFromStorage = (idsToRemove: number[]): void => {
  localStorage.setItem(
    "transactions",
    JSON.stringify(
      getTransactionsFromStorage().filter(
        (transaction: transitionProps) =>
          !idsToRemove.includes(transaction.id || 1)
      )
    )
  );
};
