import { Container } from "@/styles/global";
import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 5rem 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 20rem 0;
  }
`;

export const ContentContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10%;
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1;
  border-radius: 1rem;
  place-self: end;
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 80%;
  }
`;

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.highRes}) {
    height: 100%;
  }
`;

export const CopyTextWrapper = styled.div`
  line-height: 2;

  p + p {
    margin-top: 2rem;
  }

  b {
    font-weight: 600;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 100%;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 45rem;
  }
`;
