import { motion } from "framer-motion";
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
  gap: 1rem;
  width: 100%;
`;

export const Wrapper = styled.div<InputStyleProps>`
  position: relative;
  width: 100%;
  padding: 1rem;
  border-radius: 0.75rem;

  outline: 3px solid ${({ theme }) => theme.colors.blue.dark};
  background: ${({ theme }) => theme.colors.blue.dark};
  font-size: 1rem;

  ${({ $isErrored }) =>
    $isErrored &&
    css`
      border-color: lightcoral;
    `}

  ${({ $isFocused }) =>
    $isFocused &&
    css`
      outline-color: ${({ theme }) => theme.colors.accent.regular};
    `}

  ${({ $isFilled }) =>
    $isFilled &&
    css`
      outline-color: ${({ theme }) => theme.colors.accent.regular};
    `}

    > input, textarea {
    background: inherit;
    width: 100%;
    font-family: inherit;
    font-weight: medium;
    border: none;
    outline: none;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};

    ::placeholder {
      color: ${({ theme }) => theme.colors.blue.light};
      font-weight: 500;
      background: inherit;
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

export const Error = styled(motion.span)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  text-align: left;
  width: 100%;
`;
