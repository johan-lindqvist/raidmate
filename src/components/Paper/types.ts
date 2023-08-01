import { ReactNode } from 'react';

import { ComponentProps } from 'components';

export interface PaperProps extends ComponentProps<'div'> {
  children: ReactNode;
}
