import styled from "styled-components";
import { Theme } from "utilities/Theme";

export const TransitionWrapper = styled.div`
  padding: 2rem 0;
  margin: 1rem 0;
  transition: 0.5s;
  cursor: pointer;
  color: ${Theme.colors.secondaryColor};
  font-size: ${Theme.fontSize.large};

  &:hover {
    background: ${Theme.colors.primaryColor};
    color: ${Theme.colors.white};
  }
`;
