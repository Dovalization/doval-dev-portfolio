import { Button } from "@/components/Button";
import { Project } from "@/types/common";
import banner from "@public/images/project-banner.jpg";
import logo from "@public/images/project-logo.png";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Code, Globe } from "styled-icons/feather/";
import * as S from "./styles";

interface CollapsibleProps {
  project: Project;
}

export const Collapsible = ({ project }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = useCallback(() => {
    // only toggle if the collapsible is closed
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleClick = useCallback(() => {
    toggleCollapsible();
  }, [toggleCollapsible]);

  return (
    <S.Wrapper $isOpen={isOpen}>
      <S.Banner onClick={handleClick} $isOpen={isOpen}>
        <Image
          src={banner}
          alt="Banner"
          layout="responsive"
          objectFit="cover"
        />
        <S.LogoWrapper $isOpen={isOpen}>
          <Image
            src={logo}
            alt="Logo"
            layout="responsive"
            objectFit="contain"
          />
        </S.LogoWrapper>
      </S.Banner>
      <S.Content $isOpen={isOpen}>
        <S.Title>{project.title}</S.Title>
        <S.Description>{project.description}</S.Description>
        <S.Icons>
          {project.stack.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </S.Icons>
        <S.ButtonsContainer>
          <Button href={project.links.live} icon={Globe}>
            Acessar
          </Button>
          <Button href={project.links.code} icon={Code}>
            Github
          </Button>
        </S.ButtonsContainer>
      </S.Content>
    </S.Wrapper>
  );
};
