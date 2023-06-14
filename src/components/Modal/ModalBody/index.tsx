import { ModalBodyProps } from './types.ts';
import { Body } from './styled.ts';

export function ModalBody(props: ModalBodyProps) {
  const { children } = props;

  return <Body>{children}</Body>;
}
