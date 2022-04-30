import { Container } from "@/styles/global";
import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.blue.dark};
  position: relative;
  margin-top: -5rem;
  padding: 10rem 0 5rem;

  // add a divider to the top of the section
  &::before {
    content: "";
    position: absolute;
    top: -12rem;
    left: 0;
    width: 100%;
    height: 12rem;
    background: url("/images/doval-dev-wave-divider-top.svg") no-repeat;
    background-size: cover;
    /* background: url('/img/shapes/fluid-top-white.svg') no-repeat bottom; */
    /* background-size: 100% auto; */
    /* transform: rotate(180deg); */
    z-index: 2;
  }

  // add a divider to the bottom of the section
  &::after {
    content: "";
    position: absolute;
    bottom: -12rem;
    left: 0;
    width: 100%;
    height: 12rem;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  /*  */
`;

export const ProjectsContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
`;

interface ProjectStyleProps {
  $isMobile?: boolean;
  $isOpen?: boolean;
}

export const ProjectWrapper = styled.article<ProjectStyleProps>`
  background: ${({ theme }) => theme.colors.blue.medium};
  width: 100%;
`;

export const ProjectBanner = styled.div<ProjectStyleProps>``;

export const ProjectContent = styled.div<ProjectStyleProps>``;

export const ProjectTitle = styled.h3<ProjectStyleProps>``;

export const ProjectDescription = styled.p<ProjectStyleProps>``;

export const ProjectStack = styled.div<ProjectStyleProps>``;

export const ButtonsContainer = styled.div<ProjectStyleProps>``;
