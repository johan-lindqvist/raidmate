import { Option } from '../types.ts';

export interface SelectOptionProps {
  option: Option;
  selected?: boolean;
  onClick: (value: string, option: Option) => void;
}

export interface OptionContainerProps {
  $selected: boolean;
}
