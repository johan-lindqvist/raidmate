import styled from 'styled-components';

export const StyledInput = styled.input`
  outline: none;
  height: 54px;
  border: 2px solid transparent;
  font-size: ${(props) => props.theme.fontSize.input};
  color: ${(props) => props.theme.colors.text[1000]};
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.blue[50]};
  transition: ${(props) => props.theme.transition('fast', 'all')};

  &::placeholder {
    color: ${(props) => props.theme.colors.blue[300]};
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    border: 2px solid ${(props) => props.theme.colors.blue[500]};
  }

  &:disabled::placeholder {
    color: ${(props) => props.theme.colors.blue[200]};
  }
`;
