import { Fragment, cloneElement, useRef, useState } from 'react';

import { Portal, Typography } from 'components';

import { TooltipContainer } from './styled.ts';
import { TooltipProps } from './types.ts';

// TODO: Make sure tooltip can be used on function components, change all components to forwardRef

export function Tooltip(props: TooltipProps) {
  const { children, title, hide = false, direction = 'top', delay = 'normal', spacing = 'sm' } = props;
  const [show, setShow] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);

  const handleMouseEnter = () => {
    if (elementRef.current) {
      setShow(true);
      setRect(elementRef.current.getBoundingClientRect());
    }
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  if (hide) {
    return children;
  }

  return (
    <Fragment>
      {cloneElement(children, { ref: elementRef, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave })}
      {show && (
        <Portal>
          <TooltipContainer $direction={direction} $delay={delay} $show={show} $spacing={spacing} $rect={rect}>
            <Typography size="detail">{title}</Typography>
          </TooltipContainer>
        </Portal>
      )}
    </Fragment>
  );
}
