import { StyledIcon } from "@styled-icons/styled-icon";
import { HTMLMotionProps } from "framer-motion";

import Link from "next/link";
import * as S from "./styles";

type TIcon = "rightArrow" | "leftArrow" | "downArrow" | "upArrow";

interface ButtonProps extends HTMLMotionProps<"button"> {
  link?: string;
  icon?: StyledIcon;
}

interface ButtonLinkProps extends ButtonProps {
  link: string;
}

const ButtonLink = ({
  children,
  link,
  icon: Icon,
  variants,
  onClick,
}: ButtonLinkProps) => {
  return (
    <Link href={link} passHref>
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
      <ButtonLink link={link} {...props} onClick={onClick}>
        {children}
      </ButtonLink>
    );
  }

  return (
    <PlainButton {...props} onClick={onClick}>
      {children}
    </PlainButton>
  );
};
