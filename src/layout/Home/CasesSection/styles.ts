import { Container } from "@/styles/global";
import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.blue.dark};

  // add a divider to the top of the section
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    width: 102%;
    height: 10%;
    /* background: url('/img/shapes/fluid-top-white.svg') no-repeat bottom; */
    /* background-size: 100% auto; */
    /* transform: rotate(180deg); */
    z-index: 2;
    background: ${({ theme }) => theme.colors.blue.light};
  }

  // add a divider to the bottom of the section
  &::after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    width: 102%;
    height: 10%;
    /* background: url('/img/shapes/fluid-top-white.svg') no-repeat bottom; */
    /* background-size: 100% auto; */
    /* transform: rotate(180deg); */
    z-index: 2;
    background: ${({ theme }) => theme.colors.blue.light};
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
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
`;

interface ProjectStyleProps {
  $isMobile: boolean;
  $isOpen: boolean;
}

export const ProjectWrapper = styled.article<ProjectStyleProps>``;

export const ProjectBanner = styled.div<ProjectStyleProps>``;

export const ProjectContent = styled.div<ProjectStyleProps>``;

export const ProjectTitle = styled.h3<ProjectStyleProps>``;

export const ProjectDescription = styled.p<ProjectStyleProps>``;

export const ProjectStack = styled.div<ProjectStyleProps>``;

export const ButtonsContainer = styled.div<ProjectStyleProps>``;
