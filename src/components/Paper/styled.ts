import styled from 'styled-components';

export const PaperContainer = styled.div`
  border-radius: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.blue[100]};
`;
