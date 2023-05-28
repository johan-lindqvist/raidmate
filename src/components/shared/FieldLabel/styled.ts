import styled from 'styled-components';

import { Typography } from 'components';

export const StyledTypography = styled(Typography)`
  color: ${(props) => props.theme.colors.text['800']};
`;
