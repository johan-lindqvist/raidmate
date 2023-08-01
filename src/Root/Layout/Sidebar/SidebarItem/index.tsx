import { useMatch, useNavigate } from 'react-router-dom';

import { FeatherIcon, Tooltip, Typography } from 'components';

import { SidebarItemProps } from './types';
import { Item, ItemActiveBorder, ItemIcon, ItemLabel } from './styled';

export function SidebarItem(props: SidebarItemProps) {
  const { to, label, icon, open } = props;
  const navigate = useNavigate();

  const active = Boolean(useMatch(to));

  const handleClick = () => {
    if (!active) {
      navigate(to);
    }
  };

  return (
    <Tooltip hide={open} title={label} direction="right">
      <Item $active={active} onClick={handleClick}>
        <ItemActiveBorder />
        <ItemIcon>
          <FeatherIcon icon={icon} />
        </ItemIcon>
        <ItemLabel>
          <Typography size="h3">{label}</Typography>
        </ItemLabel>
      </Item>
    </Tooltip>
  );
}
