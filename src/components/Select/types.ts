export interface SelectOption<T> {
  value: T;
  label: string;
}

export interface SelectProps<T> {
  value: string;
  options: SelectOption<T>[];
  onChange: (value: T, option: SelectOption<T>) => void;
}
