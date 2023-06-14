import { CheckboxProps } from './types.ts';
import { FeatherIcon, FieldContainer, FieldLabel } from 'components';
import { CustomCheckbox, StyledCheckbox, StyledLabel } from './styled.ts';
import { ChangeEvent } from 'react';

export function Checkbox(props: CheckboxProps) {
  const { checked, label, onChange, ...rest } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked, event);
  };

  return (
    <FieldContainer>
      <StyledLabel>
        <StyledCheckbox {...rest} type="checkbox" checked={checked} onChange={handleChange} />
        <CustomCheckbox>
          <FeatherIcon icon="Check" />
        </CustomCheckbox>
        {label && <FieldLabel>{label}</FieldLabel>}
      </StyledLabel>
    </FieldContainer>
  );
}
