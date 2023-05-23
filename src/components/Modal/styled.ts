import styled, { keyframes } from 'styled-components';
import { Typography } from 'components';

const overlayAnimation = keyframes`
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  
  100% {
    opacity: 1;
    backdrop-filter: blur(1px);
  }
`;

const contentAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${(props) => props.theme.animateIn(overlayAnimation, 'normal')};
`;

export const ModalContent = styled.div`
  position: absolute;
  z-index: 1;
  border-radius: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.blue[100]};
  animation: ${(props) => props.theme.animateIn(contentAnimation, 'normal')};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.xl};
  border-bottom: 1px solid ${(props) => props.theme.colors.blue[50]};
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.xl};
`;

export const StyledTypography = styled(Typography)`
  color: ${(props) => props.theme.colors.text[1000]};
`;