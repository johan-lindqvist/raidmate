import styled, { css, keyframes } from 'styled-components';

import { SelectContainerProps } from './types.ts';

const dropdownAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0px);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  
  100% {
    opacity: 1;
    transform: translateY(8px);
    box-shadow: 0 4px 16px 8px rgba(0, 0, 0, 0.25);
  }
`;

export const SelectText = styled.div`
  color: ${(props) => props.theme.colors.blue[300]};
`;

export const SelectIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  color: ${(props) => props.theme.colors.blue[400]};
  transition: ${(props) => props.theme.transition('fast', 'all')};
`;

export const SelectContainer = styled.div<SelectContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  cursor: pointer;
  width: 100%;
  outline: 2px solid transparent;
  outline-offset: -1px;
  border: 2px solid transparent;
  font-size: ${(props) => props.theme.fontSize.input};
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.blue[50]};
  transition: ${(props) => props.theme.transition('fast', 'all')};

  ${(props) =>
    props.$open &&
    css`
      border: 2px solid ${(props) => props.theme.colors.blue[500]};

      ${SelectIcon} {
        transform: rotate(-180deg);
      }
    `};

  ${(props) =>
    props.$hasValue &&
    css`
      ${SelectText} {
        color: ${(props) => props.theme.colors.text[1000]};
      }
    `};
`;

export const SelectDropdown = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  outline: 2px solid ${(props) => props.theme.colors.blue[50]};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.blue[50]};
  animation: ${(props) => props.theme.animateIn(dropdownAnimation, 'fast')};
`;

export const StyledButton = styled.button`
  border-width: 0 !important;
  outline-width: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
  opacity: 0 !important;

  &:hover + label ${SelectContainer} {
    border: 2px solid ${(props) => props.theme.colors.blue[500]};
  }

  &:focus + label ${SelectContainer} {
    outline: 2px solid ${(props) => props.theme.colors.blue[500]};
  }
`;
