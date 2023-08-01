import { Portal } from 'components';

import { ModalProps } from './types.ts';
import { ModalContainer, ModalContent, ModalOverlay } from './styled.ts';

export function Modal(props: ModalProps) {
  const { show, children, onClose } = props;

  if (!show) {
    return null;
  }

  return (
    <Portal>
      <ModalContainer>
        <ModalContent>{children}</ModalContent>
        <ModalOverlay onClick={onClose} />
      </ModalContainer>
    </Portal>
  );
}
