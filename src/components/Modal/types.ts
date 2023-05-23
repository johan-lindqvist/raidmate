import { ReactNode } from 'react';

export interface ModalProps {
  show: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}
