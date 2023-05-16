import styled from 'styled-components';

const Base = styled.button`
  padding: ${(props) => props.theme.spacing.lg};

  font-size: ${(props) => props.theme.fontSize.paragraph};
  font-weight: ${(props) => props.theme.fontWeight.normal};

  border-radius: ${(props) => props.theme.spacing.md};

  color: ${(props) => props.theme.colors.blue[600]};

  transition: ${(props) => props.theme.transition('fast', 'all')};

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export const SecondaryButton = styled(Base)`
  border: 1px solid ${(props) => props.theme.colors.blue[400]};
  background-color: transparent;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.blue[500]};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.blue[50]};
  }
`;

export const PrimaryButton = styled(Base)`
  color: ${(props) => props.theme.colors.text[1000]};
  border: 1px solid ${(props) => props.theme.colors.blue[400]};
  background-color: ${(props) => props.theme.colors.blue[400]};

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.blue[500]};
    background-color: ${(props) => props.theme.colors.blue[500]};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.blue[300]};
  }
`;
