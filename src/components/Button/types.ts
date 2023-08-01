import { ReactNode } from 'react';

import { ComponentProps } from '../types';

export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  appearance?: 'primary' | 'secondary' | 'battlenet';
}
