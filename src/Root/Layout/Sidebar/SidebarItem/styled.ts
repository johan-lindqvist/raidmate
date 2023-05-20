import styled, { css } from 'styled-components';

import { ItemProps } from './types';

export const ItemActiveBorder = styled.div`
  width: 2px;
  height: 60px;
  transform: translateX(-100%);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  background-color: ${(props) => props.theme.colors.orange[500]};
  transition: ${(props) => props.theme.transition('fast', 'all')};
`;

export const ItemIcon = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  color: ${(props) => props.theme.colors.blue[400]};
  transition: ${(props) => props.theme.transition('fast', 'color')};
`;

export const ItemLabel = styled.div`
  overflow: hidden;
  flex: 1 1 auto;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.blue[400]};
  transition: ${(props) => props.theme.transition('fast', 'color')};
`;

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;

  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      ${ItemActiveBorder} {
        transform: translateX(0%);
        box-shadow: 16px 0 64px 6px rgba(233, 155, 0, 1);
      }

      ${ItemIcon} {
        color: ${(props) => props.theme.colors.orange[500]};
      }

      ${ItemLabel} {
        color: ${(props) => props.theme.colors.orange[500]};
      }
    `}

  &:hover ${ItemIcon}, &:hover ${ItemLabel} {
    color: ${(props) => !props.$active && props.theme.colors.blue[500]};
  }
`;
