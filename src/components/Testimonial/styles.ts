import styled from "styled-components";

export const Wrapper = styled.article``;

export const ContentContainer = styled.div`
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.blue.medium};
  padding: 2.5rem;
`;

export const AuthorContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};

  font-weight: 400;
  line-height: 2;
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  outline: 3px solid ${({ theme }) => theme.colors.accent.regular};
  overflow: hidden;
  width: 5rem;
  height: 5rem;
`;

export const QuoteWrapper = styled.div`
  max-width: 4rem;
  width: 100%;
  height: 100%;
`;
export const AuthorInfo = styled.div``;

export const AuthorName = styled.address`
  font-style: normal;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const AuthorTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  font-weight: normal;
`;
