import { PrimaryButton, SecondaryButton } from './styled';
import { ButtonProps } from './types';

export function Button(props: ButtonProps) {
  const { children, primary, ...rest } = props;

  if (primary) {
    return <PrimaryButton {...rest}>{children}</PrimaryButton>;
  }

  return <SecondaryButton {...rest}>{children}</SecondaryButton>;
}
