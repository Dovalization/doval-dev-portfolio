import { StyledIcon } from "@styled-icons/styled-icon";
import Link from "next/link";
import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import * as S from "./styles";
// join the two types into a single type, allowing either one to be passed
interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  link?: string;
  icon?: StyledIcon;
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  icon?: StyledIcon;
}

const ButtonLink = ({
  children,
  link,
  icon: Icon,
  ...rest
}: ButtonLinkProps) => {
  return (
    <Link href={link!} passHref>
      <S.Wrapper as={"a"} target="_blank" {...rest}>
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
    <S.Wrapper as={"button"} {...rest}>
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

export const Button = ({ children, link, ...rest }: ButtonProps) => {
  if (link) {
    return (
      <ButtonLink link={link} {...rest}>
        {children}
      </ButtonLink>
    );
  }

  return <PlainButton {...rest}>{children}</PlainButton>;
};
