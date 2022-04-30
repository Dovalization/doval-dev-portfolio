import { StyledIconBase } from "@styled-icons/styled-icon";
import styled from "styled-components";

export const Wrapper = styled.a`
  display: inline-block;
  border-radius: 50%;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.accent.dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.regular};
    ${StyledIconBase} {
      transform: scale(1.2);
    }
  }

  ${StyledIconBase} {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    stroke-width: 2;
    transition: transform 0.1s ease-in-out;
  }
  transition: background-color 0.2s ease-in-out;
`;

export const VisuallyHidden = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;
