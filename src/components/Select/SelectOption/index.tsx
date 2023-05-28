import { MouseEvent } from 'react';

import { SelectOptionProps } from './types.ts';
import { OptionContainer } from './styled.ts';

export function SelectOption(props: SelectOptionProps) {
  const { option, selected = false, onClick } = props;
  const { value, label } = option;

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    onClick(value, option);
  };

  return (
    <OptionContainer $selected={selected} onClick={handleClick}>
      {label}
    </OptionContainer>
  );
}
