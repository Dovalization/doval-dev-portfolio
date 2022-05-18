import { Container } from "@/styles/global";
import styled from "styled-components";

export const Wrapper = styled.section``;

export const ContentContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.highRes}) {
    padding: 0 5%;
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Copy = styled.p`
  line-height: 2;

  strong {
    font-weight: 600;
  }
`;
