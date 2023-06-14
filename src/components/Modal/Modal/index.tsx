import { createPortal } from 'react-dom';

import { ModalProps } from './types.ts';
import { ModalContainer, ModalContent, ModalOverlay } from './styled.ts';

export function Modal(props: ModalProps) {
  const { show, children, onClose } = props;
  const node = document.body;

  if (!show) {
    return null;
  }

  return createPortal(
    <ModalContainer>
      <ModalContent>{children}</ModalContent>
      <ModalOverlay onClick={onClose} />
    </ModalContainer>,
    node,
  );
}
