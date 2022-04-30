import styled, { css } from "styled-components";

interface CollapsibleStyleProps {
  $isMobile?: boolean;
  $isOpen?: boolean;
}

export const Wrapper = styled.article<CollapsibleStyleProps>`
  background: ${({ theme }) => theme.colors.blue.medium};
  width: 100%;
  margin: 0.2rem;
  max-width: 70%;
  outline: 4px solid transparent;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: outline 0.1s linear;

  &:hover {
    ${({ theme, $isOpen }) =>
      !$isOpen &&
      css`
        outline: 4px solid ${theme.colors.accent.regular};
      `}
  }
`;

export const Banner = styled.div<CollapsibleStyleProps>`
  max-height: 30rem;
  overflow: hidden;
  position: relative;
`;

export const LogoWrapper = styled.div<CollapsibleStyleProps>`
  display: none;
`;

export const Content = styled.div<CollapsibleStyleProps>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  padding: 2rem;
`;

export const Title = styled.h2<CollapsibleStyleProps>`
  margin-bottom: 0.5rem;
`;

export const Description = styled.p<CollapsibleStyleProps>`
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

export const Icons = styled.div<CollapsibleStyleProps>`
  margin-bottom: 5rem;
  display: flex;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div<CollapsibleStyleProps>`
  display: flex;
  gap: 1rem;
`;
