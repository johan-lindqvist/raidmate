import styled from 'styled-components';

const Base = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;

  padding: ${(props) => props.theme.spacing.lg};

  font-size: ${(props) => props.theme.fontSize.paragraph};
  font-weight: ${(props) => props.theme.fontWeight.normal};

  border-radius: ${(props) => props.theme.spacing.md};

  color: ${(props) => props.theme.colors.blue[600]};

  transition: ${(props) => props.theme.transition('fast', 'all')};

  &:not(:disabled) {
    cursor: pointer;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

export const SecondaryButton = styled(Base)`
  background-color: transparent;
  outline: none;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue[100]};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.blue[200]};
  }
`;

export const PrimaryButton = styled(Base)`
  color: ${(props) => props.theme.colors.text[1000]};
  outline: 1px solid ${(props) => props.theme.colors.blue[400]};
  background-color: ${(props) => props.theme.colors.blue[400]};

  &:hover {
    outline: 1px solid ${(props) => props.theme.colors.blue[500]};
    background-color: ${(props) => props.theme.colors.blue[500]};
  }

  &:focus {
    background-color: ${(props) => props.theme.colors.blue[300]};
  }
`;
