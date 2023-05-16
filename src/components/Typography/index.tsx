import { Text } from './styled';
import { TypographyProps } from './types';

export function Typography(props: TypographyProps) {
  const { children, wowColor, size = 'paragraph', weight = 'normal', ...rest } = props;

  return (
    <Text $size={size} $weight={weight} $wowColor={wowColor} {...rest}>
      {children}
    </Text>
  );
}
