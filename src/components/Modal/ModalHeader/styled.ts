import styled from 'styled-components';
import { Typography } from 'components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.xl};
  border-bottom: 1px solid ${(props) => props.theme.colors.blue[50]};
`;

export const StyledTypography = styled(Typography)`
  color: ${(props) => props.theme.colors.text[1000]};
`;
