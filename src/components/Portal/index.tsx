import { createPortal } from 'react-dom';

import { PortalProps } from './types.ts';

export function Portal(props: PortalProps) {
  const { children } = props;

  return createPortal(children, document.body);
}
