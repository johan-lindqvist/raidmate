import styled from 'styled-components';

export const ItemIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.blue[600]};
  transition: ${(props) => props.theme.transition('fast', 'color')};
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text.light};
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.md};

  &:hover ${ItemIcon} {
    color: ${(props) => props.theme.colors.orange[500]};
  }
`;
