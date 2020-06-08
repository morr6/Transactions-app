import styled from 'styled-components';
import { Theme } from 'utilities/Theme';

export const ListWrapper = styled.div`
  height: ${window.innerHeight / 2}px;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${Theme.colors.secondaryColor};
`;

export const Header = styled.div`
  font-size: ${Theme.fontSize.medium};
  color: ${Theme.colors.secondaryColor};
  border-bottom: 1px solid ${Theme.colors.secondaryColor};

  margin-top: 1rem;
  padding-bottom: 1rem;
`;

export const NameWrapper = styled.span`
  padding: 0 1rem;
`;

export const SumValue = styled.span`
  font-size: ${Theme.fontSize.large};
`;
