import { FeatherIcon } from 'components';

import {
  ButtonContainer,
  ButtonElement,
  ButtonIcon,
  ButtonLabels,
  PrimaryTypography,
  SecondaryTypography,
} from './styled';
import { BigButtonProps } from './types';

export function BigButton(props: BigButtonProps) {
  const { primary, wowColor, secondary, icon, element, size = 'small', ...rest } = props;

  return (
    <ButtonContainer $size={size} $wowColor={wowColor} {...rest}>
      {element && <ButtonElement>{element}</ButtonElement>}
      <ButtonLabels>
        <PrimaryTypography wowColor={wowColor}>{primary}</PrimaryTypography>
        <SecondaryTypography size="detail">{secondary}</SecondaryTypography>
      </ButtonLabels>
      <ButtonIcon>
        <FeatherIcon icon={icon} />
      </ButtonIcon>
    </ButtonContainer>
  );
}
