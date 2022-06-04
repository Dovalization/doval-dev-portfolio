import { Container } from "@/styles/global";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled.header``;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    transform: scale(1);
  }
`;

export const ContentContainer = styled(Container)`
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInDown} 1s ease-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  max-width: 15rem;
  width: 100%;
  height: 100%;
`;

export const SocialIconsContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`;
