import { StyledIcon } from "@styled-icons/styled-icon";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: StyledIcon;
  href?: string;
}

export const Button = ({
  children,
  onClick,
  icon: Icon,
  href,
}: ButtonProps) => {
  return (
    <Link href={href || "#"} passHref>
      <S.Wrapper onClick={onClick} as={href ? "a" : "button"}>
        {children}
        {Icon && <Icon size={20} />}
      </S.Wrapper>
    </Link>
  );
};
