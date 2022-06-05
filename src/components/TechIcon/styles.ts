import { StyledIconBase } from "@styled-icons/styled-icon";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;

  ${StyledIconBase} {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.25;
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
