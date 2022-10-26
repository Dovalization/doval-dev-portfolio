import { StyledIcon } from "@styled-icons/styled-icon";
import { HTMLMotionProps } from "framer-motion";

import Link from "next/link";
import { MouseEventHandler } from "react";
import * as S from "./styles";

type TIcon = "rightArrow" | "leftArrow" | "downArrow" | "upArrow";

interface ButtonProps extends HTMLMotionProps<"button" | "a"> {
  link?: string;
  icon?: StyledIcon;
}

interface PlayButtonProps extends HTMLMotionProps<"button"> {
  icon?: StyledIcon;
}

interface LinkButtonProps extends HTMLMotionProps<"a"> {
  icon?: StyledIcon;
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
}: PlayButtonProps) => {
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
      <ButtonLink
        link={link}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        icon={props.icon}
      >
        {children}
      </ButtonLink>
    );
  }

  return (
    <PlainButton onClick={onClick as MouseEventHandler<HTMLButtonElement>}>
      {children}
    </PlainButton>
  );
};
