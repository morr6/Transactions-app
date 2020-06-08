interface transitionProps {
  name: string;
  euroValue: number;
  date: string;
  id?: number;
}

export const getTransactionsFromStorage = () => {
  try {
    let transactions = JSON.parse(localStorage.getItem("transactions") || "{}");

    return transactions;
  } catch (err) {
    console.log(err);
  }
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
  localStorage.setItem(
    "transactions",
    JSON.stringify([
      {
        id: getTransactionsFromStorage() && generateTransactionId(),
        transactionName: name,
        euroValue: euroValue,
        transactionDate: date,
      },
      ...getTransactionsFromStorage(),
    ])
  );
};

export const deleteTransactionFromStorage = (
  idsToRemove: Array<number>
): void => {
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
