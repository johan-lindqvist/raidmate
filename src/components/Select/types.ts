export interface Option<T> {
  value: T;
  label: string;
}

export interface SelectProps<T> {
  value: string;
  label: string;
  options: Option<T>[];
  disabled?: boolean;
  onChange: (value: T, option: Option<T>) => void;
}

export interface SelectContainerProps {
  $open: boolean;
  $focused: boolean;
  $disabled: boolean;
  $hasValue: boolean;
}
