import styled from 'styled-components';

export const ButtonBase = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  height: 54px;
  outline: 2px solid transparent;
  outline-offset: -1px;

  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.lg};
  font-size: ${(props) => props.theme.fontSize.input};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border-radius: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.text[1000]};
  transition: ${(props) => props.theme.transition('fast', 'all')};

  &:not(:disabled) {
    cursor: pointer;
  }

  &:focus:not(:disabled) {
    outline: 2px solid ${(props) => props.theme.colors.blue[500]};
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  border: 2px solid ${(props) => props.theme.colors.blue[400]};
  background-color: ${(props) => props.theme.colors.blue[400]};

  &:hover:not(:disabled) {
    border: 2px solid ${(props) => props.theme.colors.blue[500]};
  }

  &:active:not(:disabled) {
    background-color: ${(props) => props.theme.colors.blue[300]};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.text[800]};
    border: 2px solid ${(props) => props.theme.colors.blue[200]};
    background-color: ${(props) => props.theme.colors.blue[200]};
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  border: 2px solid ${(props) => props.theme.colors.blue[300]};
  background-color: transparent;

  &:hover:not(:disabled) {
    border: 2px solid ${(props) => props.theme.colors.blue[500]};
  }

  &:active:not(:disabled) {
    background-color: ${(props) => props.theme.colors.blue[50]};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.text[800]};
    border: 2px solid ${(props) => props.theme.colors.blue[200]};
  }
`;

export const BattleNetButton = styled(ButtonBase)`
  text-decoration: none;
  outline: none;

  color: ${(props) => props.theme.colors.text[1000]};
  font-size: ${(props) => props.theme.fontSize.paragraph};
  font-weight: ${(props) => props.theme.fontWeight.bold};

  padding: ${(props) => props.theme.spacing.lg};

  border-radius: ${(props) => props.theme.spacing.md};
  border: 2px solid ${(props) => props.theme.colors.battlenet.blue};
  background-color: ${(props) => props.theme.colors.battlenet.blue};

  &:hover:not(:disabled) {
    border: 2px solid ${(props) => props.theme.colors.battlenet.blueLight};
  }

  &:active:not(:disabled) {
    background-color: ${(props) => props.theme.colors.battlenet.blueDark};
  }

  &:focus:not(:disabled) {
    outline: 2px solid transparent;
  }
`;
