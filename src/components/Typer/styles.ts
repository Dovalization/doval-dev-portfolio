import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .typer-wrapper,
  .typer-cursor {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: bold;
    /* text-transform: uppercase; */
    line-height: 1.5;
  }

  .typer-cursor {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.accent.regular};
  }
`;
