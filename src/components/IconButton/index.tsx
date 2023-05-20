import { Button, FeatherIcon } from 'components';

import { IconButtonProps } from './types';

export function IconButton(props: IconButtonProps) {
  const { icon, primary, ...rest } = props;

  return (
    <Button primary={primary} {...rest}>
      <FeatherIcon icon={icon} />
    </Button>
  );
}
