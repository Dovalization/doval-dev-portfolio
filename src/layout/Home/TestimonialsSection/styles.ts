import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 15rem 0 0;
`;

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-transform: none;

  span {
    color: ${({ theme }) => theme.colors.accent.regular};
  }
`;

export const Subheading = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.blue.light};
`;
export const TestimonialsContainer = styled.div``;
