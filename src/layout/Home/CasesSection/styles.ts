import { Container } from "@/styles/global";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.blue.dark};
  position: relative;
  padding: 5rem 0;

  // add a divider to the top of the section
  &::before {
    content: "";
    position: absolute;
    top: -14rem;
    left: 0;
    width: 100%;
    height: 15rem;
    background: url("/images/doval-dev-wave-divider-top.svg") no-repeat;
    background-size: cover;
    /* background: url('/img/shapes/fluid-top-white.svg') no-repeat bottom; */
    /* background-size: 100% auto; */
    /* transform: rotate(180deg); */
    z-index: 5;
  }

  // add a divider to the bottom of the section
  &::after {
    content: "";
    position: absolute;
    bottom: -14rem;
    left: 0;
    width: 100%;
    height: 15rem;
    background: url("/images/doval-dev-wave-divider-bottom.svg") no-repeat;
    background-size: cover;
    /* background: url('/img/shapes/fluid-top-white.svg') no-repeat bottom; */
    /* background-size: 100% auto; */
    /* transform: rotate(180deg); */
    z-index: 2;
  }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  // center align the background image
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-height: 80vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-height: 180vh;
  }
`;

// make the background image cover the entire screen

/*  */

export const ProjectsContainer = styled(motion(Container))`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
`;
