import styled, { css } from "styled-components";
import { Theme } from "utilities/Theme";

interface TransitionWrapper {
  deleteMode: boolean;
  shouldBeDeleted: boolean;
}

export const TransitionWrapper = styled.div`
  padding: 2rem 1rem;
  margin: 1rem 0;
  transition: 0.5s;
  cursor: pointer;
  color: ${Theme.colors.secondaryColor};
  font-size: ${Theme.fontSize.large};

  &:hover {
    background: ${Theme.colors.primaryColor};
    color: ${Theme.colors.white};
  }

  ${({ deleteMode }: TransitionWrapper) =>
    deleteMode &&
    css`
      background: ${Theme.colors.primaryColor};
      color: ${Theme.colors.white};
    `}

  ${({ shouldBeDeleted }: TransitionWrapper) =>
    shouldBeDeleted &&
    css`
      transform: scale(0.9);
      color: ${Theme.colors.white};
      background: rgba(255, 50, 50);
    `}
`;
