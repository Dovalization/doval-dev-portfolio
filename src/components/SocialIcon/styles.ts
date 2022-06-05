import { StyledIconBase } from "@styled-icons/styled-icon";
import styled from "styled-components";

export const Wrapper = styled.a`
  display: inline-block;
  border-radius: 50%;
  padding: 0.8rem;
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    border: 3px solid ${({ theme }) => theme.colors.accent.regular};
    background-color: ${({ theme }) => theme.colors.accent.regular};
    ${StyledIconBase} {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  ${StyledIconBase} {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    stroke-width: 2;
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
