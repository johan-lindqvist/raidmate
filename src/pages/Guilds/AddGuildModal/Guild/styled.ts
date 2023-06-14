import styled, { css, keyframes } from 'styled-components';

import { ResultContainerProps } from './types.ts';
import { Typography } from 'components';

const CONTENT_HEIGHT = '86px';

const enterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const ResultContainer = styled.div<ResultContainerProps>`
  height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 0;
  padding: 0 ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.blue[50]};
  transition: ${(props) => props.theme.transition('slow', 'all')};

  ${(props) =>
    props.$open &&
    css`
      height: ${CONTENT_HEIGHT};
      margin-top: ${(props) => props.theme.spacing.lg};
      padding: ${(props) => props.theme.spacing.md};
    `};
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  animation: ${(props) => props.theme.animateIn(enterAnimation, 'normal')};
`;

export const GuildItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 ${(props) => props.theme.spacing.lg};
  border: 1px solid ${(props) => props.theme.colors.blue[200]};
  border-radius: ${(props) => props.theme.spacing.md};
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.colors.blue[200]},
    ${(props) => props.theme.colors.blue[100]}
  );
`;

export const GuildItemTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledGuildName = styled(Typography)`
  color: ${(props) => props.theme.colors.text[900]};
`;

export const StyledGuildRealm = styled(Typography)`
  color: ${(props) => props.theme.colors.text[800]};
`;
