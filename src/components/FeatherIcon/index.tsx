import * as AllFeatherIcons from 'react-feather';

import { FeatherIconProps } from './types';

export type { ReactFeatherIcon } from './types';

export function FeatherIcon(props: FeatherIconProps) {
  const { icon, ...rest } = props;

  const Icon = AllFeatherIcons[icon];

  return <Icon {...rest} />;
}
