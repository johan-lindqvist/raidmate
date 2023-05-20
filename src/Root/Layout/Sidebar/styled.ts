import styled, { css } from 'styled-components';

import { SidebarContainerProps } from './types';

export const SidebarFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarContainer = styled.div<SidebarContainerProps>`
  display: flex;
  align-items: center;

  width: 80px;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid ${(props) => props.theme.colors.blue[100]};

  transition: ${(props) => props.theme.transition('normal', 'width')};

  ${(props) =>
    props.$open &&
    css`
      width: 280px;
    `}
`;

export const ItemsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;
