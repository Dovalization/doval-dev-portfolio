import { Container } from "@/styles/global";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  margin: 5rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 10rem 0;
  }
`;

export const ContentContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  width: 100%;
  display: grid;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10%;
  }
`;

export const Heading = styled.h2`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-transform: none;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 1rem;
  }
`;

export const Subheading = styled.h3`
  color: ${({ theme }) => theme.colors.blue.light};
  font-size: 1.25rem;
  font-weight: normal;
  max-width: 40rem;
  line-height: 1.5;

  & + & {
    margin-top: 1rem;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  width: 100%;
  margin: 6rem 0 2rem;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: flex-start;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const RightContainer = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.highRes}) {
    margin-left: auto;
    max-width: 80%;
  }
`;
