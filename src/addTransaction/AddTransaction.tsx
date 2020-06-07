import React, { useState } from "react";
import {
  ModalContent,
  Title,
  Form,
  Input,
  StyledFormControl,
  ButtonsWrapper,
} from "./AddTransaction.s";

import _ from "lodash";
import { getTransactionsFromStorage } from "storage/LocalStorage";

import { Button } from "app/components/button/Button";

import Modal from "@material-ui/core/Modal";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

import { useSelector, useDispatch } from "react-redux";
import { toogleModal, addTransition } from "addTransaction/Actions";

interface Store {
  isModalOpen: boolean;
}

interface Transition {
  name: string;
  euroValue: number;
}

export const AddTransactionModal: React.FC = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((store: Store) => store.isModalOpen);

  const [transition, setTransition] = useState<Transition | {}>({});

  const closeModal = (): void => {
    if (isModalOpen) {
      dispatch(toogleModal());
    }
  };

  const onTransactionAdd = (): void => {
    closeModal();
  };

  const onInputChange = (event): void => {
    setTransition({
      ...transition!,
      [event.target.name]: event.target.value,
    });
  };

  const clearState = (): void => {
    setTransition({});
  };

  const addTransaction = (): void => {
    if (!_.isEmpty(transition) && !_.some(transition, _.isEmpty)) {
      dispatch(addTransition(getTransactionsFromStorage()));
      dispatch(toogleModal());

      clearState();
    }
  };

  return (
    <Modal open={isModalOpen} onClose={closeModal}>
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
              type="number"
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">€</InputAdornment>
              }
              labelWidth={40}
              onChange={(event) => onInputChange(event)}
              name="euroValue"
            />
          </StyledFormControl>

          <ButtonsWrapper>
            <Button text="add transaction" click={addTransaction} />
            <Button text="cancel" click={onTransactionAdd} />
          </ButtonsWrapper>
        </Form>
      </ModalContent>
    </Modal>
  );
};
