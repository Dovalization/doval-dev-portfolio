import { StyledIconBase } from "@styled-icons/styled-icon";
import styled from "styled-components";

export const Wrapper = styled.button`
  /* Positioning */

  /* Display & Box Model */
  border: none;
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  /* Color */
  background: ${({ theme }) => theme.colors.accent.dark};
  color: ${({ theme }) => theme.colors.white};

  /* Text */
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};

  /* Other */
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.accent.regular};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 20rem;
  }
`;

export const ButtonContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Label = styled.span`
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const IconContainer = styled.div`
  ${StyledIconBase} {
    stroke-width: 2;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
