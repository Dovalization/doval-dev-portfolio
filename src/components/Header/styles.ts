import { Container } from "@/styles/global";
import styled from "styled-components";

export const Wrapper = styled.header``;

export const ContentContainer = styled(Container)`
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  max-width: 15rem;
  width: 100%;
  height: 100%;
`;

export const SocialIconsContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`;
