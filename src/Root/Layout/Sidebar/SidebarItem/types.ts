import { ReactFeatherIcon } from 'types';

export interface SidebarItemProps {
  to: string;
  label: string;
  icon: ReactFeatherIcon;
}

export interface ItemProps {
  $active: boolean;
}
