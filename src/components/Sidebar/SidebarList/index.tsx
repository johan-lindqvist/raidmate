import { List } from './styled';
import { SidebarListProps } from './types';

export function SidebarList(props: SidebarListProps) {
  const { children } = props;

  return <List>{children}</List>;
}
