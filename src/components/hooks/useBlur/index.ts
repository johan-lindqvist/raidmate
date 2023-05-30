import { MutableRefObject, useState } from 'react';
import { useEventListener } from 'usehooks-ts';

export const useBlur = <T extends HTMLElement>(ref: MutableRefObject<T | null>, callback: () => void) => {
  const [blurred, setBlurred] = useState(true);

  const checkBlur = (target: EventTarget | null) => {
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

  const onClick = (event: MouseEvent) => checkBlur(event.target);
  const onKeyup = (event: KeyboardEvent) => checkBlur(event.target);

  useEventListener('click', onClick);
  useEventListener('keyup', onKeyup);

  return blurred;
};
