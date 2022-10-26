import { Container } from "@/styles/global";
import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0;
  gap: 1.5rem;
`;

export const LogoWrapper = styled.div`
  position: relative;
  max-width: 15rem;
  max-height: 5rem;
  width: 100%;
  height: 100%;
`;

export const Copyright = styled.span`
  display: inline;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
`;

export const SocialIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;
