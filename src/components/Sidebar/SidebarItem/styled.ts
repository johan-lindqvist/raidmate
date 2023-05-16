import styled, { css } from 'styled-components';

import { ItemProps } from './types';

export const ItemIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.blue[600]};
  transition: ${(props) => props.theme.transition('fast', 'color')};
`;

export const Item = styled.div<ItemProps>`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text.light};
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.blue[100]};
  transition: ${(props) => props.theme.transition('fast', 'background-color')};

  &:hover {
    background-color: ${(props) => !props.$active && props.theme.colors.blue[200]};
  }

  ${(props) =>
    props.$active &&
    css`
      color: ${(props) => props.theme.colors.blue[100]};
      background-color: ${(props) => props.theme.colors.blue[600]};

      ${ItemIcon} {
        color: inherit;
      }
    `}
`;
