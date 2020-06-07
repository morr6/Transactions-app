import React from "react";
import { StyledButton } from "./Button.s";

interface Props {
  text: string;
  fc: (event?: MouseEvent) => void;
}

export const Button: React.FC<Props> = ({ text, fc }: Props) => {
  return (
    <StyledButton
      fullWidth
      variant="outlined"
      color="primary"
      onClick={() => fc()}
    >
      {text}
    </StyledButton>
  );
};
