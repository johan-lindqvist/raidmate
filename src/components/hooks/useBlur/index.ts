import { MutableRefObject, useState } from 'react';
import { useEventListener } from 'usehooks-ts';

export const useBlur = <T extends HTMLElement>(ref: MutableRefObject<T | null>, callback: () => void) => {
  const [blurred, setBlurred] = useState(true);

  const onClick = (event: MouseEvent) => {
    const target = event.target;
    const reference = ref.current;

    if (!reference) {
      return;
    }

    if (reference !== target && !reference.contains(target as Node)) {
      callback();
      setBlurred(true);
    } else {
      setBlurred(false);
    }
  };

  useEventListener('click', onClick);

  return blurred;
};
