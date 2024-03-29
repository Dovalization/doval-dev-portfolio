import { Container } from "@styles/global";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
`;

export const ContentContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 110vh;
  padding-top: 8rem;
  padding-bottom: 16rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 100vh;
    grid-template-columns: 2.5fr 1fr;
    padding-bottom: 10rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.highRes}) {
    grid-template-columns: 1.5fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.ultraHighRes}) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const HeroContent = styled(motion.div)`
  z-index: 5;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: start;
    justify-content: center;
  }
`;

export const Title = styled(motion.h1)`
  line-height: 1.25;
  text-align: center;
  max-width: 18ch;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.large};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.highRes}) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }
`;

export const Subtitle = styled(motion.h1)`
  text-align: center;
  font-weight: 600;
  max-width: 30ch;
  font-size: ${({ theme }) => theme.fontSizes.small};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.highRes}) {
    font-size: ${({ theme }) => theme.fontSizes.big};
  }
`;

export const ButtonContainer = styled(motion.div)`
  width: 100%;
`;

export const HeroBackgroundDesktop = styled.div`
  z-index: 1;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;

  video {
    object-fit: cover;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const HeroBackgroundMobile = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;

  video {
    object-fit: cover;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;
