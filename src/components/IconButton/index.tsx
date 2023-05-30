import { FeatherIcon } from 'components';

import { IconButtonProps } from './types';
import { StyledButton } from './styled.ts';

export function IconButton(props: IconButtonProps) {
  const { icon, ...rest } = props;

  return (
    <StyledButton {...rest}>
      <FeatherIcon icon={icon} />
    </StyledButton>
  );
}
