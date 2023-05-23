import { SelectOptionProps } from './types.ts';

export function SelectOption<T>(props: SelectOptionProps<T>) {
  const { option, onClick } = props;
  const { value, label } = option;

  const handleClick = () => {
    onClick(value, option);
  };

  return <div onClick={handleClick}>{label}</div>;
}
