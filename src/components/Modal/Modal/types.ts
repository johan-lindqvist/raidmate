import { ReactNode } from 'react';

export interface ModalProps {
  show: boolean;
  children: ReactNode;
  onClose: () => void;
}
