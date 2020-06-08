import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Theme } from 'utilities/Theme';

export const Title = styled.h2`
  color: ${Theme.colors.primaryColor};
`;

export const TransactionWrapper = styled.p`
  color: ${Theme.colors.primaryColor};
  font-size: ${Theme.fontSize.large};
  margin: 0;
`;
