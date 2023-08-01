import { ReactElement } from 'react';

import { SpacingKey } from 'theme';

type Direction = 'top' | 'right' | 'bottom' | 'left';

export type Delay = 'slow' | 'normal';

export interface TooltipProps {
  title: string;
  children: ReactElement;
  direction?: Direction;
  delay?: Delay;
  spacing?: SpacingKey;
  hide?: boolean;
}

export interface TooltipContainerProps {
  $direction: Direction;
  $delay: Delay;
  $show: boolean;
  $spacing: SpacingKey;
  $rect: DOMRect | null;
}
