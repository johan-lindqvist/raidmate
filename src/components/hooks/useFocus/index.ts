import { MutableRefObject, useState } from 'react';
import { useEventListener } from 'usehooks-ts';

export const useFocus = <T extends HTMLElement>(ref: MutableRefObject<T | null>, callback: () => void) => {
  const [focused, setFocused] = useState(false);

  const checkFocus = (target: EventTarget | null) => {
    const reference = ref.current;

    if (!reference) {
      return;
    }

    if (reference === target || reference.contains(target as Node)) {
      callback();
      setFocused(true);
    } else {
      setFocused(false);
    }
  };

  const onClick = (event: MouseEvent) => checkFocus(event.target);
  const onKeyup = (event: KeyboardEvent) => checkFocus(event.target);

  useEventListener('click', onClick);
  useEventListener('keyup', onKeyup);

  return focused;
};
