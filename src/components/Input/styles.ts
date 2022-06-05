import { StyledIconBase } from "@styled-icons/styled-icon";
import { motion } from "framer-motion";
import { shade } from "polished";
import styled, { css } from "styled-components";

interface InputStyleProps {
  $isFocused: boolean;
  $isFilled: boolean;
  $isErrored: boolean;
}

export const Container = styled(motion.div)`
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

export const Wrapper = styled.div<InputStyleProps>`
  position: relative;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.1rem;
  border-bottom: 3px solid ${({ theme }) => shade(0.2, theme.colors.blue.light)};
  background: ${({ theme }) => shade(0.2, theme.colors.blue.light)};
  font-size: 1rem;

  ${({ $isErrored }) =>
    $isErrored &&
    css`
      border-color: lightcoral;
      transition: border-color 0.2s ease-in-out;
    `}

  ${({ $isFocused }) =>
    $isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.accent.regular};
      transition: border-color 0.2s ease-in-out;
    `}

  ${({ $isFilled }) =>
    $isFilled &&
    css`
      border-color: ${({ theme }) => theme.colors.white};
      transition: border-color 0.2s ease-in-out;
    `}

  > input,
  textarea {
    background: inherit;
    width: 100%;
    font-family: inherit;
    font-weight: normal;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.white};

    ::placeholder {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 500;
      background: inherit;
      opacity: 0.8;
    }
  }

  > textarea {
    min-height: 8rem;
    resize: vertical;

    &::-webkit-resizer {
      --light-blue: ${({ theme }) => theme.colors.blue.light};
      border-style: solid;
      border-width: 2px;
      border-color: transparent var(--light-blue) var(--light-blue) transparent;
    }
  }

  transition: outline-color 0.1s;
`;

export const ErrorContainer = styled(motion.div)`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  gap: 0.5rem;
  ${StyledIconBase} {
    color: lightcoral;
    stroke-width: 2;
    width: 1rem;
    height: 1rem;
  }
`;

export const Error = styled(motion.span)`
  font-weight: 500;
  text-align: left;
`;
