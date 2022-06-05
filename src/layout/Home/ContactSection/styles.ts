import { Container } from "@/styles/global";
import { StyledIconBase } from "@styled-icons/styled-icon";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  margin: 5rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 10rem 0;
  }
`;

export const ContentContainer = styled(Container)`
  padding: 0 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10%;

  width: 100%;
  display: grid;
`;

export const Heading = styled.h2`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-transform: none;
  margin-bottom: 2rem;
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
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const ContactWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const IconContainer = styled.div`
  margin-right: 0.5rem;
  ${StyledIconBase} {
    stroke-width: 2;
    width: 1.25rem;
    height: 1.25rem;
  }
`;
