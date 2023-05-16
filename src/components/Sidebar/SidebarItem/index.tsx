import { useMatch, useNavigate } from 'react-router';

import { FeatherIcon, Typography } from 'components';

import { Item, ItemIcon } from './styled';
import { SidebarItemProps } from './types';

export function SidebarItem(props: SidebarItemProps) {
  const { to, icon, label } = props;
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
        <FeatherIcon icon={icon} />
      </ItemIcon>
      <Typography size="h3">{label}</Typography>
    </Item>
  );
}
