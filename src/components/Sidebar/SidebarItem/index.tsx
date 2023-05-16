import { useMatch, useNavigate } from 'react-router';

import { Typography } from 'src/components';

import { Item, ItemIcon } from './styled';
import { SidebarItemProps } from './types';

export function SidebarItem(props: SidebarItemProps) {
  const { icon: FeatherIcon, label, to } = props;
  const navigate = useNavigate();
  const match = useMatch(to);

  const handleClick = () => {
    if (!match) {
      navigate(to);
    }
  };

  return (
    <Item $active={Boolean(match)} onClick={handleClick}>
      <ItemIcon>
        <FeatherIcon />
      </ItemIcon>
      <Typography size="h3">{label}</Typography>
    </Item>
  );
}
