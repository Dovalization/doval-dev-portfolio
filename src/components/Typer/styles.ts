import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .typer-wrapper,
  .typer-cursor {
    margin: 0;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.small};

    /* text-transform: uppercase; */
    line-height: 1.5;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }

  .typer-cursor {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.accent.regular};
  }
`;
