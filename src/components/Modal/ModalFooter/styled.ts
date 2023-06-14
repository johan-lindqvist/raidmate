import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.xl};
  border-top: 1px solid ${(props) => props.theme.colors.blue[50]};
`;
