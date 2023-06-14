import { IconButton } from 'components';

import { ModalHeaderProps } from './types.ts';
import { Header, StyledTypography } from './styled.ts';

export function ModalHeader(props: ModalHeaderProps) {
  const { title, onClose } = props;

  return (
    <Header>
      <StyledTypography size="h3">{title}</StyledTypography>
      <IconButton icon="X" onClick={onClose} />
    </Header>
  );
}
