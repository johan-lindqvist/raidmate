import { Container } from './styled';
import { SidebarProps } from './types';

export { SidebarItem } from './SidebarItem';
export { SidebarList } from './SidebarList';
export { SidebarLogo } from './SidebarLogo';

export function Sidebar(props: SidebarProps) {
  const { children } = props;

  return <Container>{children}</Container>;
}
