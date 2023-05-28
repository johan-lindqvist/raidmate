import { ComponentProps } from 'components';

export interface TextFieldProps extends ComponentProps<'input'> {
  label: string;
  placeholder: string;
}
