import { Container } from './styled';
import { SidebarProps } from './types';

export { SidebarItem } from './SidebarItem';

export function Sidebar(props: SidebarProps) {
  const { children } = props;

  return <Container>{children}</Container>;
}
