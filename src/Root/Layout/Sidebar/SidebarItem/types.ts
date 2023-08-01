import { ReactFeatherIcon } from 'types';

export interface SidebarItemProps {
  to: string;
  label: string;
  icon: ReactFeatherIcon;
  open: boolean;
}

export interface ItemProps {
  $active: boolean;
}
