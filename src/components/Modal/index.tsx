import { createPortal } from 'react-dom';

import { IconButton } from 'components';

import { ModalProps } from './types.ts';
import { ModalBody, ModalContainer, ModalContent, ModalHeader, ModalOverlay, StyledTypography } from './styled.ts';

export function Modal(props: ModalProps) {
  const { show, title, children, onClose } = props;
  const node = document.body;

  if (!show) {
    return null;
  }

  return createPortal(
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <StyledTypography size="h3">{title}</StyledTypography>
          <IconButton icon="X" onClick={onClose} />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
      <ModalOverlay onClick={onClose} />
    </ModalContainer>,
    node,
  );
}
