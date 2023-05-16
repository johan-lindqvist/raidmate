import * as AllFeatherIcons from 'react-feather';

import { ComponentProps } from '../types';

export type ReactFeatherIcon = keyof typeof AllFeatherIcons;

export interface FeatherIconProps extends ComponentProps {
  icon: ReactFeatherIcon;
}
