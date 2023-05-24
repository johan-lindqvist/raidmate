import { SelectOptionProps } from './types.ts';
import { MouseEvent } from 'react';

export function SelectOption<T>(props: SelectOptionProps<T>) {
  const { option, onClick } = props;
  const { value, label } = option;

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    onClick(value, option);
  };

  return <div onClick={handleClick}>{label}</div>;
}
