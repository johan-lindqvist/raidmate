import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.xl};
`;
