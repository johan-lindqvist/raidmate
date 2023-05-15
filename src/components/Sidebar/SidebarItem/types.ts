import { Icon as FeatherIcon } from 'react-feather';

export interface SidebarItemProps {
  icon: FeatherIcon;
  label: string;
  active?: boolean;
  onClick: () => void;
}
