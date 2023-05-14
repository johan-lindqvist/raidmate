import styled from 'styled-components';
import { theme } from 'theme';

const Base = styled.button`
  padding: ${theme.spacing.lg};

  font-size: ${theme.fontSize.paragraph};
  font-weight: ${theme.fontWeight.normal};

  border-radius: ${theme.spacing.md};

  color: ${theme.colors.blue[600]};

  transition: ${theme.transition('fast', 'all')};

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export const SecondaryButton = styled(Base)`
  border: 1px solid ${theme.colors.blue[400]};
  background-color: transparent;

  &:hover {
    border: 1px solid ${theme.colors.blue[500]};
  }

  &:active {
    background-color: ${theme.colors.blue[50]};
  }
`;

export const PrimaryButton = styled(Base)`
  color: ${theme.colors.text.light};
  border: 1px solid ${theme.colors.blue[400]};
  background-color: ${theme.colors.blue[400]};

  &:hover {
    border: 1px solid ${theme.colors.blue[500]};
    background-color: ${theme.colors.blue[500]};
  }

  &:active {
    background-color: ${theme.colors.blue[300]};
  }
`;
