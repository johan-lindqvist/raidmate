import { Footer } from './styled';
import { SidebarFooterProps } from './types';

export function SidebarFooter(props: SidebarFooterProps) {
  const { children } = props;

  return <Footer>{children}</Footer>;
}
