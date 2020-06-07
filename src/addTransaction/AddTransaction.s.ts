import styled from "styled-components";
import { Theme } from "utilities/Theme";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export const ModalContent = styled.div`
  width: 25%;
  padding: 3rem 5rem;
  background: white;

  margin: auto;
  margin-top: 10rem;
  text-align: center;
  border-radius: 0.5rem;
`;

export const Title = styled.h2`
  font-size: ${Theme.fontSize.large};
  color: ${Theme.colors.secondaryColor};
  padding-bottom: 1rem;
  margin: auto;
  width: 50%;
  border-bottom: 2px solid rgb(81, 68, 255);
`;

export const Form = styled.form`
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 5rem 0 2rem 0;

  & > input[type="number"] {
    -moz-appearance: textfield;
  }

  & > input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Input = styled(TextField)`
  & label,
  input {
    font-size: ${Theme.fontSize.medium};
  }

  & .Mui-focused {
    color: rgb(81, 68, 255) !important;
  }
`;

export const StyledFormControl = styled(FormControl)`
  & p,
  label,
  input {
    font-size: ${Theme.fontSize.medium};
  }

  & .Mui-focused {
    color: rgb(81, 68, 255) !important;
    & p {
      color: rgb(81, 68, 255) !important;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: linear-gradient(
    to bottom right,
    rgb(81, 68, 255),
    rgb(88, 0, 202)
  );
  border-radius: 0.5rem;
  padding: 1rem;
`;
