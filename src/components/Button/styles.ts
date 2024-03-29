import { StyledIconBase } from "@styled-icons/styled-icon";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.button)`
  /* Positioning */

  /* Display & Box Model */
  border-radius: 4rem;
  outline: none;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  /* Color */
  /* background: ${({ theme }) => theme.colors.accent.dark}; */
  background: transparent;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.accent.regular};
  border: 3px solid ${({ theme }) => theme.colors.accent.regular};

  /* Text */
  font-weight: bold;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};

  /* Other */
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.1);
    /* border: 3px solid ${({ theme }) => theme.colors.white}; */
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 20rem;
  }
`;

export const LinkButtonWrapper = styled(motion.span)`
  /* Positioning */

  /* Display & Box Model */
  border-radius: 4rem;
  outline: none;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  /* Color */
  /* background: ${({ theme }) => theme.colors.accent.dark}; */
  background: transparent;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.accent.regular};
  border: 3px solid ${({ theme }) => theme.colors.accent.regular};

  /* Text */
  font-weight: bold;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};

  /* Other */
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.1);
    /* border: 3px solid ${({ theme }) => theme.colors.white}; */
    color: ${({ theme }) => theme.colors.white};
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
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const IconContainer = styled.div`
  margin-right: 0.5rem;
  ${StyledIconBase} {
    stroke-width: 2;
    width: 1.25rem;
    height: 1.25rem;
  }
`;
