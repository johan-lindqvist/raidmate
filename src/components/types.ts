import { ComponentPropsWithoutRef, ElementType } from 'react';

export type ComponentProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  className?: string;
};
