import { StyledIconBase } from "@styled-icons/styled-icon";
import styled from "styled-components";

export const Wrapper = styled.button`
  /* Positioning */

  /* Display & Box Model */
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 4rem;
  outline: none;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  /* Color */
  /* background: ${({ theme }) => theme.colors.accent.dark}; */
  background: transparent;
  color: ${({ theme }) => theme.colors.white};

  /* Text */
  font-weight: bold;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};

  /* Other */
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.accent.regular};
    border: 3px solid ${({ theme }) => theme.colors.accent.regular};
    color: ${({ theme }) => theme.colors.black};
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: fit-content;
  }
`;

export const ButtonContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const IconContainer = styled.div`
  margin-left: 0.5rem;
  ${StyledIconBase} {
    stroke-width: 2;
    width: 1.25rem;
    height: 1.25rem;
  }
`;
