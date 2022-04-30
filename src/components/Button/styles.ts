import { StyledIconBase } from "@styled-icons/styled-icon";
import styled from "styled-components";

export const Wrapper = styled.button`
  /* Positioning */

  /* Display & Box Model */
  border: none;
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem 6rem;

  /* Color */
  background: ${({ theme }) => theme.colors.accent.dark};
  color: ${({ theme }) => theme.colors.white};

  /* Text */
  text-transform: uppercase;
  font-weight: bold;

  /* Other */
  transition: all 0.2s ease-in-out;

  ${StyledIconBase} {
    margin-left: 0.5rem;
  }
`;
