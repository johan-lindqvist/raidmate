import { css, Keyframes } from 'styled-components';

const tempoMap = {
  slow: '325ms',
  normal: '225ms',
  fast: '175ms',
};

const easing = 'ease-in-out';

export const createTransition = (tempo: 'slow' | 'normal' | 'fast', ...properties: string[]) =>
  properties.map((property) => `${property} ${tempoMap[tempo]} ${easing}`).join(', ');

export const createAnimateIn = (animation: Keyframes, tempo: 'slow' | 'normal' | 'fast') => css`
  ${animation} ${tempoMap[tempo]} ${easing} forwards
`;
