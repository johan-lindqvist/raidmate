import { MutableRefObject, useState } from 'react';
import { useEventListener } from 'usehooks-ts';

export const useFocus = <T extends HTMLElement>(ref: MutableRefObject<T | null>, callback: () => void) => {
  const [focused, setFocused] = useState(false);

  const onClick = (event: MouseEvent) => {
    const target = event.target;
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

  useEventListener('click', onClick);

  return focused;
};
