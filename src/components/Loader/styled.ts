import styled, { keyframes } from 'styled-components';

const rotationForwardsAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const rotationBackwardsAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(-360deg);
  }
`;

export const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
`;

export const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border-top: 3px solid ${(props) => props.theme.colors.orange[500]};
  border-right: 3px solid transparent;
  animation: ${rotationForwardsAnimation} 1s linear infinite;
`;

export const SpinnerContainer = styled.div`
  position: absolute;
`;

export const BorderContainer = styled.div`
  width: inherit;
  height: inherit;

  & > svg {
    width: inherit;
    height: inherit;
    color: ${(props) => props.theme.colors.blue[400]};
    animation: ${rotationBackwardsAnimation} 4s linear infinite;
  }
`;
