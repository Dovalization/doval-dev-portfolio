import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 5rem 0;
  overflow: hidden;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
`;

export const Slide = styled.div`
  position: relative;
  min-width: 100%;
  padding: 0.25rem 7.5%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.25rem 10%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0.25rem 2.5rem;

    min-width: 50%;
  }
`;
