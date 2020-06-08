import React from 'react';
import { TransitionWrapper } from './Transaction.s';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { addIdToDeleteArray, deleteTransactionIdFromArray } from './Actions';
import {
  transaction,
  selectPlnRate,
  selectDeleteMode,
  selectIdsToDeleteArray,
} from 'app/selectors/selectors';

interface Props {
  transaction: transaction;
}

export const Transaction: React.FC<Props> = ({ transaction }: Props) => {
  const dispatch = useDispatch();

  const plnRate = useSelector(selectPlnRate);
  const deleteMode = useSelector(selectDeleteMode);
  const idsToDelete = useSelector(selectIdsToDeleteArray);

  const addTransactionIdToDelete = (id: any): void => {
    if (deleteMode) {
      if (idsToDelete.indexOf(id) === -1) dispatch(addIdToDeleteArray(id));
      else dispatch(deleteTransactionIdFromArray(id));
    }
  };

  const { name, euroValue, date, id } = transaction;
  return (
    <TransitionWrapper
      shouldBeDeleted={idsToDelete.indexOf(id as number) !== -1}
      deleteMode={deleteMode}
      onClick={() => addTransactionIdToDelete(id)}
    >
      <Grid container>
        <Grid item xs={6}>
          {name}
        </Grid>
        <Grid item xs={2}>
          {Number(euroValue).toFixed(2)} EUR
        </Grid>
        <Grid item xs={2}>
          {(euroValue * plnRate).toFixed(2)} PLN
        </Grid>
        <Grid item xs={2}>
          {date}
        </Grid>
      </Grid>
    </TransitionWrapper>
  );
};
