import { FieldContainer, FieldLabel } from 'components';

import { StyledInput } from './styled.ts';
import { TextFieldProps } from './types.ts';

export function TextField(props: TextFieldProps) {
  const { label, type = 'text', ...rest } = props;

  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>
      <StyledInput type={type} {...rest} />
    </FieldContainer>
  );
}
