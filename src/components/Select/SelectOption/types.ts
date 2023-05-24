import { Option } from '../types.ts';

export interface SelectOptionProps<T> {
  option: Option<T>;
  onClick: (value: T, option: Option<T>) => void;
}
