import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 15rem 0 0;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-transform: none;

  span {
    color: ${({ theme }) => theme.colors.accent.regular};
  }
`;
export const TestimonialsContainer = styled.div``;
