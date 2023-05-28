import { FieldContainerProps } from './types.ts';
import { Container } from './styled.ts';

export function FieldContainer(props: FieldContainerProps) {
  const { children } = props;

  return <Container>{children}</Container>;
}
