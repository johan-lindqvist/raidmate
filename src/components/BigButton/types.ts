import { ReactFeatherIcon } from 'components';
import { WowColorKey } from 'theme';

import { ComponentProps } from '../types';

type BigButtonSize = 'small' | 'large';

export interface BigButtonProps extends ComponentProps {
  icon: ReactFeatherIcon;
  primary: string;
  secondary: string;
  size?: BigButtonSize;
  element?: JSX.Element;
  wowColor?: WowColorKey;
}

export interface ButtonContainerProps {
  $size: BigButtonSize;
  $wowColor?: WowColorKey;
}
