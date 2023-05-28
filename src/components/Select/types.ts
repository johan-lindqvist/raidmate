import { ComponentProps } from 'components';

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<ComponentProps<'button'>, 'onChange'> {
  value: string;
  label: string;
  placeholder: string;
  options: Option[];
  onChange: (value: string, option: Option) => void;
}

export interface SelectContainerProps {
  $open: boolean;
  $hasValue: boolean;
}
