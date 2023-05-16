import { Icon as FeatherIcon } from 'react-feather';

export interface SidebarItemProps {
  to: string;
  icon: FeatherIcon;
  label: string;
}

export interface ItemProps {
  $active: boolean;
}
