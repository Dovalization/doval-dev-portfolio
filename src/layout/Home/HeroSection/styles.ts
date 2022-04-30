import { Container } from "@styles/global";
import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ContentContainer = styled(Container)`
  display: grid;
  place-items: center;
`;

export const HeroContainer = styled.div`
  margin: 0;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.25);
  z-index: 4;
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;

  video {
    object-fit: cover;
    height: 100%;
  }
`;

export const HeroContent = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(23, 25, 35, 0) 0%,
    rgba(23, 25, 35, 0.5) 100%
  );
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  height: 100%;
  width: 100%;
  gap: 1rem;
  z-index: 5;
`;
