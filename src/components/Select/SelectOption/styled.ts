import styled, { css } from 'styled-components';

import { OptionContainerProps } from './types.ts';

export const OptionContainer = styled.div<OptionContainerProps>`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: ${(props) => props.theme.spacing.md};
  padding-left: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text[1000]};
  background-color: transparent;
  transition: ${(props) => props.theme.transition('fast', 'all')};

  &:hover {
    background-color: ${(props) => props.theme.colors.blue[200]};
  }

  ${(props) =>
    props.$selected &&
    css`
      &:hover {
        background-color: ${(props) => props.theme.colors.blue[400]};
      }

      background-color: ${(props) => props.theme.colors.blue[400]};
    `};
`;
