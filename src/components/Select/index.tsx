import { SelectOption } from './SelectOption';
import { SelectProps } from './types.ts';

export function Select<T extends string | number>(props: SelectProps<T>) {
  const { value, options, onChange } = props;

  return (
    <div>
      <div>value: {value}</div>
      {options.map((option) => (
        <SelectOption key={option.value} option={option} onClick={onChange} />
      ))}
    </div>
  );
}
