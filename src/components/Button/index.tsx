import { PrimaryButton, SecondaryButton } from './styled';
import { ButtonProps } from './types';

export function Button(props: ButtonProps) {
  const { children, primary } = props;

  if (primary) {
    return <PrimaryButton>{children}</PrimaryButton>;
  }

  return <SecondaryButton>{children}</SecondaryButton>;
}
