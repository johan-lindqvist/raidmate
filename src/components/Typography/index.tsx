import { Text } from './styled';
import { TypographyProps } from './types';

export function Typography(props: TypographyProps) {
  const { children, size = 'paragraph', weight = 'normal' } = props;

  return (
    <Text $size={size} $weight={weight}>
      {children}
    </Text>
  );
}
