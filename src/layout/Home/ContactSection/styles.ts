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
  width: 100%;
  display: grid;
`;
