import { useRef, useState } from 'react';
import { v4 } from 'uuid';

import { FeatherIcon, FieldContainer, FieldLabel, useBlur } from 'components';

import { SelectOption } from './SelectOption';
import { SelectProps, Option } from './types.ts';
import { SelectContainer, SelectDropdown, SelectIcon, SelectText, StyledButton } from './styled.ts';

export function Select(props: SelectProps) {
  const { value, label, placeholder, options, onChange, ...rest } = props;
  const id = `select-${v4()}`;

  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLButtonElement | null>(null);

  const selectedOption = options.find((option) => option.value === value);
  const hasValue = Boolean(selectedOption);

  useBlur(selectRef, () => {
    setOpen(false);
  });

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleOptionClick = (value: string, option: Option) => {
    onChange(value, option);
    setOpen(false);
  };

  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>
      <StyledButton id={id} ref={selectRef} onClick={handleClick} {...rest} />
      <label htmlFor={id}>
        <SelectContainer $open={open} $hasValue={hasValue}>
          <SelectText>{selectedOption ? selectedOption.label : placeholder}</SelectText>
          <SelectIcon>
            <FeatherIcon icon="ChevronDown" />
          </SelectIcon>
          {open && (
            <SelectDropdown>
              {options.map((option) => (
                <SelectOption
                  key={option.value}
                  option={option}
                  selected={option.value === value}
                  onClick={handleOptionClick}
                />
              ))}
            </SelectDropdown>
          )}
        </SelectContainer>
      </label>
    </FieldContainer>
  );
}
