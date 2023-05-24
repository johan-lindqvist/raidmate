import { useRef, useState } from 'react';

import { FeatherIcon, useBlur, useFocus } from 'components';

import { SelectOption } from './SelectOption';
import { SelectProps, Option } from './types.ts';
import {
  SelectContainer,
  SelectDropdown,
  SelectIcon,
  SelectTexts,
  SelectTextsLabel,
  SelectTextsValue,
} from './styled.ts';

export function Select<T extends string | number>(props: SelectProps<T>) {
  const { value, label, options, disabled = false, onChange } = props;
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const selectedOption = options.find((option) => option.value === value);
  const hasValue = Boolean(selectedOption);

  useBlur(containerRef, () => {
    setOpen(false);
  });

  const focused = useFocus(containerRef, () => {
    setOpen((value) => !value);
  });

  const handleOptionClick = (value: T, option: Option<T>) => {
    onChange(value, option);
    setOpen(false);
  };

  return (
    <SelectContainer $open={open} $focused={focused} $disabled={disabled} $hasValue={hasValue} ref={containerRef}>
      <SelectTexts>
        <SelectTextsLabel>{label}</SelectTextsLabel>
        {selectedOption && <SelectTextsValue>{selectedOption.label}</SelectTextsValue>}
      </SelectTexts>
      <SelectIcon>
        <FeatherIcon icon="ChevronDown" />
      </SelectIcon>
      <SelectDropdown>
        {options.map((option) => (
          <SelectOption key={option.value} option={option} onClick={handleOptionClick} />
        ))}
      </SelectDropdown>
    </SelectContainer>
  );
}
