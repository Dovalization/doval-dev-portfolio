import Link from "next/link";
import { Github, Linkedin, Twitter } from "styled-icons/feather/";
import * as S from "./styles";

interface SocialIconProps {
  type: "GitHub" | "LinkedIn" | "Twitter";
  url: string;
}

const icon = {
  GitHub: <Github />,
  LinkedIn: <Linkedin />,
  Twitter: <Twitter />,
};

export const SocialIcon = ({ type, url }: SocialIconProps) => {
  return (
    <Link href={url} passHref>
      <S.Wrapper target="_blank">
        {icon[type]}
        <S.VisuallyHidden>{type}</S.VisuallyHidden>
      </S.Wrapper>
    </Link>
  );
};
