import { ReactFeatherIcon } from 'types';

import { ComponentProps } from '../types';

export interface IconButtonProps extends ComponentProps<'button'> {
  icon: ReactFeatherIcon;
  primary?: boolean;
}
