import { StyledTypography } from './styled.ts';
import { FieldLabelProps } from './types.ts';

export function FieldLabel(props: FieldLabelProps) {
  const { children } = props;

  return <StyledTypography size="detail">{children}</StyledTypography>;
}
