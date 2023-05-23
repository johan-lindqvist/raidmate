import { SelectOption } from '../types.ts';

export interface SelectOptionProps<T> {
  option: SelectOption<T>;
  onClick: (value: T, option: SelectOption<T>) => void;
}
