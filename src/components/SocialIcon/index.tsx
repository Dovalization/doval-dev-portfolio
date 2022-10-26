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
    <Link href={url} passHref target={"_blank"}>
      <S.Wrapper>{icon[type]}</S.Wrapper>
      <S.VisuallyHidden>{type}</S.VisuallyHidden>
    </Link>
  );
};
