import styled from 'styled-components';

import { ButtonBase } from '../Button/styled.ts';

export const StyledButton = styled(ButtonBase)`
  width: 54px;

  color: ${(props) => props.theme.colors.blue[400]};
  background-color: transparent;

  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.blue[600]};
    background-color: ${(props) => props.theme.colors.blue[200]};
  }
`;
