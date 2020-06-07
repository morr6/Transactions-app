import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Theme } from "utilities/Theme";

export const StyledButton = styled(Button)`
  & > span {
    font-size: ${Theme.fontSize.medium};
    font-weight: ${Theme.fontWeight.regular};
  }
`;
