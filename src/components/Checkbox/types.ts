import { ChangeEvent } from 'react';

import { ComponentProps } from '../types';

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'onChange'> {
  checked: boolean;
  label?: string;
  onChange: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
}
