import { Wrapper as Button } from "@components/Button/styles";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

interface ContactFormStyleProps {
  $isSubmitSuccessful: boolean;
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
    
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Title = styled.h2`
  width: 100%;
  span {
    color: ${({ theme }) => theme.colors.accent.regular};
  }
`;

export const FieldsContainer = styled(motion.div)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2.5rem;

  *:disabled {
    display: none;
  }
`;

export const Wrapper = styled.form<ContactFormStyleProps>`
  position: relative;
  ${Button} {
    position: relative;
    margin: 2rem 0 0;
  }

  ${Title} {
    display: ${({ $isSubmitSuccessful }) =>
      $isSubmitSuccessful ? "none" : "block"};
  }

  ${FieldsContainer} {
    display: ${({ $isSubmitSuccessful }) =>
      $isSubmitSuccessful ? "none" : "flex"};
  }
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: ${({ theme }) => theme.colors.blue.medium};
  border-radius: 1rem;
  width: 100%;
  padding: 2.5rem;
  place-self: end;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const SuccessMessage = styled.dialog`
  &[open] {
    /* Positioning */

    position: relative;

    /* Display & Box Model */
    align-items: center;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    /* Color */
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    /* Text */
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 600;

    animation: ${fadeInUp} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  span {
    display: block;
    line-height: 1.5;
    font-size: ${({ theme }) => theme.fontSizes.small};
    a {
      color: ${({ theme }) => theme.colors.accent.dark};

      transition: color 0.1s ease-in-out;
      &:hover {
        color: ${({ theme }) => theme.colors.accent.regular};
      }
    }
  }
`;
