import styled from 'styled-components';

import { ButtonBase } from '../Button/styled.ts';

export const StyledButton = styled(ButtonBase)`
  width: 54px;

  color: ${(props) => props.theme.colors.blue[400]};
  background-color: transparent;

  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.blue[500]};
    background-color: rgba(0, 0, 0, 0.175);
  }
`;
