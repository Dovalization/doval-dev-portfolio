import {
  Css3,
  Html5,
  Javascript,
  Nextdotjs,
  Nodedotjs,
  Prisma,
  Prismic,
  ReactLogo,
  Sass,
  Styledcomponents,
  Typescript,
  Wordpress,
} from "styled-icons/simple-icons";
import * as S from "./styles";

interface TechIconProps {
  type:
    | "HTML"
    | "CSS"
    | "JavaScript"
    | "TypeScript"
    | "WordPress"
    | "NodeJS"
    | "Prisma"
    | "Prismic"
    | "NextJS"
    | "React"
    | "StyledComponents"
    | "Sass";
}

const icon = {
  HTML: <Html5 />,
  CSS: <Css3 />,
  JavaScript: <Javascript />,
  TypeScript: <Typescript />,
  WordPress: <Wordpress />,
  NodeJS: <Nodedotjs />,
  Prisma: <Prisma />,
  Prismic: <Prismic />,
  NextJS: <Nextdotjs />,
  React: <ReactLogo />,
  StyledComponents: <Styledcomponents />,
  Sass: <Sass />,
};

export const TechIcon = ({ type }: TechIconProps) => {
  return (
    <S.Wrapper>
      {icon[type]}
      <S.VisuallyHidden>{type}</S.VisuallyHidden>
    </S.Wrapper>
  );
};
