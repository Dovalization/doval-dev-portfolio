import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  margin: 0;
  display: block;
  position: relative;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
