import styled from 'styled-components';

import { Paper } from 'components';

export const Header = styled(Paper)`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.text[1000]};
`;

export const Content = styled(Paper)`
  flex: 1 1 auto;
`;
