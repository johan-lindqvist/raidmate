import { ComponentPropsWithoutRef, ElementType } from 'react';

export type Modify<T, R> = Omit<T, keyof R> & R;

export type ComponentProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  className?: string;
};
