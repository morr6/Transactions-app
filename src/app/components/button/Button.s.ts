import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Theme } from "utilities/Theme";

export const StyledButton = styled(Button)`
  & > span {
    min-width: 20rem;
    font-size: ${Theme.fontSize.medium};
    font-weight: ${Theme.fontWeight.regular};
  }
`;
