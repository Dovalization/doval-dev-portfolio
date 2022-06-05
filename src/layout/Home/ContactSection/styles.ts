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
    padding: 0 5%;
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
    margin: 0;
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
  margin: 2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0;
  }
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
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;
