import styled, { css } from 'styled-components';

import { Typography } from 'components';

import { SelectContainerProps } from './types.ts';

export const SelectIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.blue[400]};
  transition: ${(props) => props.theme.transition('fast', 'all')};
`;

export const SelectTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectTextsLabel = styled(Typography)`
  color: ${(props) => props.theme.colors.text[800]};
`;

export const SelectTextsValue = styled(Typography)`
  color: ${(props) => props.theme.colors.text[1000]};
`;

export const SelectDropdown = styled.div`
  display: none;

  position: absolute;
  top: 100%;
  background-color: ${(props) => props.theme.colors.blue[200]};
`;

export const SelectContainer = styled.div<SelectContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: 54px;
  cursor: pointer;
  outline: 2px solid transparent;
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.blue[50]};
  transition: ${(props) => props.theme.transition('fast', 'outline')};

  ${(props) =>
    props.$open &&
    css`
      ${SelectDropdown} {
        display: block;
      }

      ${SelectIcon} {
        transform: rotate(-180deg);
      }
    `};

  ${(props) =>
    props.$focused
      ? css`
          outline: 2px solid ${(props) => props.theme.colors.blue[500]};
        `
      : css`
          &:hover {
            outline: 2px solid ${(props) => props.theme.colors.blue[300]};
          }
        `};

  ${(props) =>
    props.$hasValue &&
    css`
      ${SelectTextsLabel} {
        transform-origin: left;
        transform: scale(0.8);
      }
    `};

  ${(props) =>
    props.$disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};
`;
