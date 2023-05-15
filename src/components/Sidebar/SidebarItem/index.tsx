import { Typography } from 'src/components';

import { Item, ItemIcon } from './styled';
import { SidebarItemProps } from './types';

export function SidebarItem(props: SidebarItemProps) {
  const { icon: FeatherIcon, label, active, onClick } = props;

  return (
    <Item>
      <ItemIcon>
        <FeatherIcon />
      </ItemIcon>
      <Typography size="h3">{label}</Typography>
    </Item>
  );
}
