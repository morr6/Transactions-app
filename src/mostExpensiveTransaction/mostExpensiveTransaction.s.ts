import styled from 'styled-components';
import { Theme } from 'utilities/Theme';

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 3rem;
  color: ${Theme.colors.primaryColor};
`;

export const TransactionWrapper = styled.p`
  color: ${Theme.colors.primaryColor};
  font-size: ${Theme.fontSize.large};
  margin: 0;
`;
