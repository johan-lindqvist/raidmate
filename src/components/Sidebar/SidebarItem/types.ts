import { ReactFeatherIcon } from 'src/components';

export interface SidebarItemProps {
  to: string;
  icon: ReactFeatherIcon;
  label: string;
}

export interface ItemProps {
  $active: boolean;
}
