import { ReactNode } from 'react';

import { RaidmateTheme, WowColorKey } from 'theme';

import { ComponentProps } from '../types';

type SizeProp = keyof RaidmateTheme['fontSize'];
type WeightProp = keyof RaidmateTheme['fontWeight'];

export interface TypographyProps extends ComponentProps {
  children: ReactNode;
  size?: SizeProp;
  weight?: WeightProp;
  wowColor?: WowColorKey;
}

export interface TextProps {
  $size: SizeProp;
  $weight: WeightProp;
  $wowColor?: WowColorKey;
}
