import { ReactNode } from 'react';

import { ComponentProps } from '../types';

export interface ButtonProps extends ComponentProps {
  children: ReactNode;
  primary?: boolean;
}
