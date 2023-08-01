import styled from 'styled-components';

import { AnimationElement } from 'domains/page';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.xl};
`;

export const LeftColumn = styled(AnimationElement)`
  width: 360px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: inherit;
`;

export const RightColumn = styled(AnimationElement)`
  flex: 1 1 auto;
`;
