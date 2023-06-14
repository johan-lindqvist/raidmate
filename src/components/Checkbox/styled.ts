import styled from 'styled-components';

export const CustomCheckbox = styled.div`
  width: 24px;
  height: 24px;
  outline-offset: -1px;
  outline: 2px solid transparent;
  border-radius: ${(props) => props.theme.spacing.md};
  border: 2px solid ${(props) => props.theme.colors.blue[300]};
  background-color: ${(props) => props.theme.colors.blue[50]};
  transition: ${(props) => props.theme.transition('fast', 'all')};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    opacity: 0;
    color: ${(props) => props.theme.colors.text[1000]};
    transition: ${(props) => props.theme.transition('fast', 'all')};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};

  /* Disabled */

  &:has(input:disabled) ${CustomCheckbox} {
    border: 2px solid ${(props) => props.theme.colors.blue[200]};
    background-color: ${(props) => props.theme.colors.blue[100]};
  }

  /* Disabled : Checked */

  &:has(input:disabled:checked) ${CustomCheckbox} {
    background-color: ${(props) => props.theme.colors.blue[200]};

    svg {
      opacity: 1;
      color: ${(props) => props.theme.colors.text[800]};
    }
  }

  /* Focus */

  &:has(input:focus) ${CustomCheckbox} {
    outline: 2px solid ${(props) => props.theme.colors.blue[500]};
  }

  /* Active */

  &:has(input:active:not(:disabled)) ${CustomCheckbox} {
    background-color: ${(props) => props.theme.colors.blue[50]};
  }

  /* Hover */

  &:has(input:not(:disabled)):hover ${CustomCheckbox} {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors.blue[400]};
  }

  /* Checked */

  &:has(input:checked:not(:disabled)) ${CustomCheckbox} {
    border: 2px solid ${(props) => props.theme.colors.blue[400]};
    background-color: ${(props) => props.theme.colors.blue[400]};

    svg {
      opacity: 1;
    }
  }

  /* Checked : Hover */

  &:has(input:checked:not(:disabled)):hover ${CustomCheckbox} {
    border: 2px solid ${(props) => props.theme.colors.blue[500]};
    // background-color: ${(props) => props.theme.colors.blue[500]};

    svg {
      opacity: 1;
    }
  }
`;

export const StyledCheckbox = styled.input`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  height: 0;
  width: 0;
`;
