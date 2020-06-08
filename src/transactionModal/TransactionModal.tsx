import React, { useState } from 'react';
import {
  ModalContent,
  Title,
  Form,
  Input,
  StyledFormControl,
  ButtonsWrapper,
} from './TransactionModal.s';

import _ from 'lodash';
import { getTransactionsFromStorage, addTransactionToStorage } from 'storage/LocalStorage';

import { Button } from 'app/components/button/Button';

import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

import { useSelector, useDispatch } from 'react-redux';
import { toogleModal, addTransitions } from 'transactionModal/Actions';

import { setDate } from 'utilities/dateHandler';

import { selectIsModalOpen, transaction as transitionType } from 'app/selectors/selectors';

export const TransactionModal: React.FC = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  const [transition, setTransition] = useState<transitionType>({
    name: '',
    euroValue: 0,
    date: setDate(),
  });

  const toggleModal = (): void => {
    dispatch(toogleModal());
  };

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setTransition({
      ...transition,
      [event.target.name]: event.target.value,
    });
  };

  const clearState = (): void => {
    setTransition({
      name: '',
      euroValue: 0,
      date: setDate(),
    });
  };

  const addTransaction = (): void => {
    if (!_.isEmpty(transition) && !_.some(transition, _.isEmpty)) {
      addTransactionToStorage(transition);
      dispatch(addTransitions(getTransactionsFromStorage()));
      dispatch(toogleModal());

      clearState();
    }
  };

  return (
    <Modal open={isModalOpen} onClose={toggleModal}>
      <ModalContent>
        <Title>Add new transaction</Title>

        <Form>
          <Input
            fullWidth
            id="outlined-basic"
            variant="outlined"
            label="Transition name"
            onChange={(event) => onInputChange(event)}
            name="name"
          />

          <StyledFormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Value</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">€</InputAdornment>}
              labelWidth={40}
              onChange={(event) => onInputChange(event)}
              name="euroValue"
              type="number"
            />
          </StyledFormControl>

          <ButtonsWrapper>
            <Button text="add transaction" click={addTransaction} />
            <Button text="cancel" click={toggleModal} />
          </ButtonsWrapper>
        </Form>
      </ModalContent>
    </Modal>
  );
};
