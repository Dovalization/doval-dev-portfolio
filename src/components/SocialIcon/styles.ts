import { StyledIconBase } from "@styled-icons/styled-icon";
import styled from "styled-components";

export const Wrapper = styled.a`
  display: inline-block;
  border-radius: 50%;
  padding: 0.8rem;
  border: 3px solid ${({ theme }) => theme.colors.accent.regular};
  background-color: ${({ theme }) => theme.colors.accent.regular};
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${StyledIconBase} {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.black};
    stroke-width: 2;
  }

  &:hover {
    transform: scale(1.1);

    ${StyledIconBase} {
      color: ${({ theme }) => theme.colors.white};
    }
  }
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
