import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // REM = 1rem = 16px
  // font-size: 16px (Desktop)
  html {
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      // REM = 1rem = 15px 
      // font-size: 15px (Tablet)
      font-size: 93.75%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      // REM = 1rem = 14px
      // font-size: 14px (Mobile)
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;

    &:hover {
    }
    

    transition: all 0.2s ease-in-out;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    text-transform: uppercase;
    font-weight: 800;
    text-align: center;

    > span {
      color: ${({ theme }) => theme.colors.accent.regular};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    text-transform: uppercase;
  }

  :disabled {
    opacity: 0.6;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export const Container = styled.div`
  z-index: 1;
  max-width: 85%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 80%;
  }

  /* @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 80%;
  } */

  @media (min-width: ${({ theme }) => theme.breakpoints.ultraHighRes}) {
    max-width: 70%;
  }
`;
