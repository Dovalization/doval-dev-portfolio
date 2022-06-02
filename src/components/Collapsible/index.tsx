import { Button } from "@/components/Button";
import { Project } from "@/types/common";
import { TechIcon } from "@components/TechIcon";
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
          src={project.banner}
          alt="Banner"
          width={"2148px"}
          height={"650px"}
          layout="responsive"
          objectFit="cover"
        />
        <S.LogoWrapper $isOpen={isOpen}>
          <Image
            src={project.logo}
            alt="Logo"
            layout="responsive"
            objectFit="contain"
            width={"100%"}
            height={"100%"}
          />
        </S.LogoWrapper>
      </S.Banner>
      <S.Content $isOpen={isOpen}>
        <S.Title>{project.title}</S.Title>
        <S.Description>{project.description}</S.Description>
        <S.Icons>
          {project.stack.map((item, index) => (
            <TechIcon key={index} type={item} />
          ))}
        </S.Icons>
        <S.ButtonsContainer>
          <Button link={project.links.live} icon={Globe}>
            Acessar
          </Button>
          <Button link={project.links.code} icon={Code}>
            Github
          </Button>
        </S.ButtonsContainer>
      </S.Content>
    </S.Wrapper>
  );
};
