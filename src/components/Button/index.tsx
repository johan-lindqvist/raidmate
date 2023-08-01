import { BattleNetButton, PrimaryButton, SecondaryButton } from './styled';
import { ButtonProps } from './types';

export function Button(props: ButtonProps) {
  const { children, appearance = 'secondary', ...rest } = props;

  switch (appearance) {
    case 'primary': {
      return <PrimaryButton {...rest}>{children}</PrimaryButton>;
    }
    case 'battlenet': {
      return <BattleNetButton {...rest}>{children}</BattleNetButton>;
    }
    default: {
      return <SecondaryButton {...rest}>{children}</SecondaryButton>;
    }
  }
}
