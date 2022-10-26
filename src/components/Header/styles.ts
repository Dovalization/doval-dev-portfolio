import { Container } from "@/styles/global";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.header)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const ContentContainer = styled(Container)`
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  max-width: 15rem;
  width: 100%;
  height: 5rem;
`;

export const SocialIconsContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`;
