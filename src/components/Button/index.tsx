import { StyledIcon } from "@styled-icons/styled-icon";
import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: StyledIcon;
}

export const Button = ({ children, onClick, icon: Icon }: ButtonProps) => {
  return (
    <S.Wrapper onClick={onClick}>
      {children}
      {Icon && <Icon size={20} />}
    </S.Wrapper>
  );
};
