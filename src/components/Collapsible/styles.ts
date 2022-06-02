import styled from "styled-components";

interface CollapsibleStyleProps {
  $isMobile?: boolean;
  $isOpen?: boolean;
}

export const Wrapper = styled.article<CollapsibleStyleProps>`
  position: relative;
  background: ${({ theme }) => theme.colors.blue.medium};
  width: 100%;
  max-width: 100%;
  margin: 0.2rem;
  outline: 4px solid transparent;
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: ${({ $isOpen }) =>
    $isOpen
      ? "0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.25);"
      : "0 0.5rem 1rem rgba(0, 0, 0, 0.1);"};
  transition: all 0.1s linear;

  &:hover {
    outline: ${({ theme, $isOpen }) =>
      !$isOpen && `4px solid ${theme.colors.accent.regular};`};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: ${({ $isOpen }) => ($isOpen ? "75%" : "70%")};
  }
`;

export const LogoWrapper = styled.div<CollapsibleStyleProps>`
  position: absolute;
  margin: auto;
  top: 50%;
  left: 0;
  right: 0;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  max-width: 10rem;
  z-index: 2;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(-50%)" : "translateY(-25%)"};
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 15rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 18rem;
  }
`;

export const Banner = styled.div<CollapsibleStyleProps>`
  max-height: 30rem;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover {
    ${LogoWrapper} {
      opacity: 1;
      transform: translateY(-50%);
    }
  }
`;

export const Content = styled.div<CollapsibleStyleProps>`
  /* display: ${({ $isOpen }) => ($isOpen ? "block" : "none")}; */
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  max-height: ${({ $isOpen }) => ($isOpen ? "50rem" : "0")};
  padding: ${({ $isOpen }) => ($isOpen ? "2rem" : "0 2rem")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  overflow: hidden;
  height: 100%;

  transition: max-height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

export const Icons = styled.div`
  margin-bottom: 5rem;
  display: flex;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  max-width: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;
