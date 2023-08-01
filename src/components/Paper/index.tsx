import { PaperProps } from './types.ts';
import { PaperContainer } from './styled.ts';

export function Paper(props: PaperProps) {
  const { children, ...rest } = props;

  return <PaperContainer {...rest}>{children}</PaperContainer>;
}
