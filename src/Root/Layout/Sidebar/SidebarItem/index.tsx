import { useMatch, useNavigate } from 'react-router-dom';

import { FeatherIcon, Typography } from 'components';

import { SidebarItemProps } from './types';
import { Item, ItemActiveBorder, ItemIcon, ItemLabel } from './styled';

export function SidebarItem(props: SidebarItemProps) {
  const { to, label, icon } = props;
  const navigate = useNavigate();

  const active = Boolean(useMatch(to));

  const handleClick = () => {
    if (!active) {
      navigate(to);
    }
  };

  return (
    <Item $active={active} onClick={handleClick}>
      <ItemActiveBorder />
      <ItemIcon>
        <FeatherIcon icon={icon} />
      </ItemIcon>
      <ItemLabel>
        <Typography size="h3">{label}</Typography>
      </ItemLabel>
    </Item>
  );
}
