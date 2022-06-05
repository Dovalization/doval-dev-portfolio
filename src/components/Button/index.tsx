import { StyledIcon } from "@styled-icons/styled-icon";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  icon?: StyledIcon;
}

const ButtonLink = ({ children, link, icon: Icon }: ButtonProps) => {
  return (
    <Link href={link!} passHref>
      <S.Wrapper as={"a"} target="_blank">
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

const PlainButton = ({ children, icon: Icon, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper {...rest}>
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

export const Button = ({ children, link, ...props }: ButtonProps) => {
  if (link) {
    return (
      <ButtonLink link={link} {...props}>
        {children}
      </ButtonLink>
    );
  }

  return <PlainButton {...props}>{children}</PlainButton>;
};
