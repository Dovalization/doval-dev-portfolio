import { Container } from "@styles/global";
import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
`;

export const ContentContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  padding-top: 8rem;
  padding-bottom: 16rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 2fr 1fr;
    padding-bottom: 10rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.highRes}) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const HeroContent = styled.div`
  z-index: 5;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  gap: 1rem;
  h1 {
    line-height: 1;
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }
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
