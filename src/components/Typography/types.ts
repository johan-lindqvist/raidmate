import { ReactNode } from 'react';

import { RaidmateTheme } from 'theme';

type SizeProp = keyof RaidmateTheme['fontSize'];

type WeightProp = keyof RaidmateTheme['fontWeight'];

export interface TypographyProps {
  children: ReactNode;
  size?: SizeProp;
  weight?: WeightProp;
}

export interface TextProps {
  $size: SizeProp;
  $weight: WeightProp;
}
