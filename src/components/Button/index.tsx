import { StyledIcon } from "@styled-icons/styled-icon";
import { HTMLMotionProps } from "framer-motion";

import Link from "next/link";
import * as S from "./styles";

interface ButtonProps extends HTMLMotionProps<"button"> {
  link?: string;
  icon?: StyledIcon;
}

interface LinkButtonProps extends ButtonProps {
  link: string;
}

const ButtonLink = ({
  children,
  link,
  icon: Icon,
  variants,
  onClick,
}: LinkButtonProps) => {
  return (
    <Link href={link} passHref target={"_blank"}>
      <S.LinkButtonWrapper variants={variants} onClick={onClick}>
        <S.ButtonContents>
          {Icon && (
            <S.IconContainer>
              <Icon />
            </S.IconContainer>
          )}
          <S.Label>{children}</S.Label>
        </S.ButtonContents>
      </S.LinkButtonWrapper>
    </Link>
  );
};

const PlainButton = ({
  children,
  icon: Icon,
  variants,
  onClick,
}: ButtonProps) => {
  return (
    <S.Wrapper variants={variants} onClick={onClick}>
      <S.ButtonContents>
        {Icon && (
          <S.IconContainer>
            <Icon />
          </S.IconContainer>
        )}
        <S.Label>{children}</S.Label>
      </S.ButtonContents>
    </S.Wrapper>
  );
};

export const Button = ({ children, link, onClick, ...props }: ButtonProps) => {
  if (link) {
    return (
      <ButtonLink link={link} onClick={onClick} {...props}>
        {children}
      </ButtonLink>
    );
  }

  return (
    <PlainButton onClick={onClick} {...props}>
      {children}
    </PlainButton>
  );
};
