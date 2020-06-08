import React from "react";
import { StyledButton } from "./Button.s";

interface Props {
  text: string;
  color?: "default" | "inherit" | "primary" | "secondary" | undefined;
  fullWidth?: boolean;
  click: (event?: MouseEvent) => void;
}

export const Button: React.FC<Props> = ({
  text,
  color,
  fullWidth,
  click,
}: Props) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      variant="outlined"
      color={color || "primary"}
      onClick={() => click()}
    >
      {text}
    </StyledButton>
  );
};
