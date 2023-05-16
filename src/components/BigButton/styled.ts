import styled, { css } from 'styled-components';

import { Typography } from 'components';

import { ButtonContainerProps } from './types';

export const PrimaryTypography = styled(Typography)`
  color: ${(props) => props.theme.colors.text[1000]};
`;

export const SecondaryTypography = styled(Typography)`
  color: ${(props) => props.theme.colors.text[800]};
`;

export const ButtonElement = styled.div`
  margin-right: ${(props) => props.theme.spacing.md};
`;

export const ButtonLabels = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  text-align: left;
`;

export const ButtonIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.blue[500]};
  border-radius: ${(props) => props.theme.spacing.lg};
  // border: 1px solid ${(props) => props.theme.colors.blue[300]};
  transition: ${(props) => props.theme.transition('fast', 'all')};
`;

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;

  padding: ${(props) => (props.$size === 'small' ? props.theme.spacing.lg : props.theme.spacing.xl)};

  border-radius: ${(props) => props.theme.spacing.lg};
  border: 2px solid ${(props) => props.theme.colors.blue[300]};
  background-color: transparent;

  transition: ${(props) => props.theme.transition('fast', 'all')};

  ${(props) =>
    props.$wowColor &&
    css`
      ${PrimaryTypography} {
        color: ${props.theme.colors.wow[props.$wowColor]};
      }

      ${SecondaryTypography} {
        color: ${props.theme.colors.text[1000]};
      }
    `}

  &:not(:disabled) {
    cursor: pointer;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.blue[400]};

    ${ButtonIcon} {
      color: ${(props) => props.theme.colors.blue[600]};
      background-color: ${(props) => props.theme.colors.blue[400]};
    }
  }
`;
