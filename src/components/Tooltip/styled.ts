import styled, { css, keyframes } from 'styled-components';

import { Delay, TooltipContainerProps } from './types.ts';

const HEIGHT = 40;

const ANIMATION_DELAY_MAP: Record<Delay, number> = {
  slow: 455,
  normal: 225,
};

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;

const getPosition = (props: TooltipContainerProps) => {
  const { $direction, $spacing, $rect } = props;

  if (!$rect) {
    return null;
  }

  const { top, right, bottom, left, width, height } = $rect;

  switch ($direction) {
    case 'top': {
      return css`
        top: ${top}px;
        left: ${left}px;
        margin-left: ${width / 2}px;
        transform: translateX(-50%) translateY(calc(-${HEIGHT}px + ${(props) => props.theme.spacing[$spacing]}));
      `;
    }
    case 'bottom': {
      return css`
        top: ${bottom}px;
        left: ${left}px;
        margin-left: ${width / 2}px;
        transform: translateX(-50%) translateY(${(props) => props.theme.spacing[$spacing]});
      `;
    }
    case 'right': {
      return css`
        top: ${top}px;
        left: ${right}px;
        margin-top: ${height / 2}px;
        transform: translateY(-50%) translateX(${(props) => props.theme.spacing[$spacing]});
      `;
    }
    case 'left': {
      return css`
        top: ${top}px;
        left: ${left}px;
        margin-top: ${height / 2}px;
        transform: translateY(-50%) translateX(calc(-100% - ${(props) => props.theme.spacing[$spacing]}));
      `;
    }
  }
};

export const TooltipContainer = styled.div<TooltipContainerProps>`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;

  opacity: 0;

  height: ${HEIGHT}px;
  padding: 0 ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.text[900]};
  border-radius: ${(props) => props.theme.spacing.md};

  background: linear-gradient(
    0deg,
    ${(props) => props.theme.colors.blue[300]},
    ${(props) => props.theme.colors.blue[200]}
  );

  ${(props) => getPosition(props)};

  ${(props) =>
    props.$show &&
    css`
      animation: ${props.theme.animateIn(fadeInAnimation, 'normal')};
      animation-delay: ${ANIMATION_DELAY_MAP[props.$delay]}ms;
    `};
`;
