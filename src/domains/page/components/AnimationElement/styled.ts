import styled, { keyframes } from 'styled-components';

import { AnimationElementProps } from 'domains/page/components/AnimationElement/types.ts';

const DELAY = 125;

const enterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const AnimationElement = styled.div<AnimationElementProps>`
  opacity: 0;
  animation: ${(props) => props.theme.animateIn(enterAnimation, 'fast')};
  animation-delay: ${(props) => props.$animationOrder * DELAY}ms;
`;
