import styled from 'styled-components';
import { theme } from 'theme';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, ${theme.colors.blue[50]}, ${theme.colors.blue[200]});
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

export const BattlenetLink = styled.a`
  text-decoration: none;
  outline: none;

  color: ${theme.colors.text.light};
  font-size: ${theme.fontSize.paragraph};
  font-weight: ${theme.fontWeight.bold};

  padding: ${theme.spacing.lg};

  border-radius: ${theme.spacing.md};
  border: 2px solid ${theme.colors.battlenet.blue};
  background-color: ${theme.colors.battlenet.blue};

  transition: ${theme.transition('fast', 'background-color', 'border')};

  &:hover {
    border: 2px solid ${theme.colors.battlenet.blueLight};
  }

  &:active {
    background-color: ${theme.colors.battlenet.blueDark};
  }
`;
