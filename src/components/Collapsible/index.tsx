import { Button } from "@/components/Button";
import { Tech } from "@/types/common";

import { IProjectFields } from "@/types/contentful.pages";
import { TechIcon } from "@components/TechIcon";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Entry } from "contentful";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Globe } from "styled-icons/feather/";
import * as S from "./styles";

interface CollapsibleProps {
  project: Entry<IProjectFields>;
}

const RICHTEXT_OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <S.Description>{children}</S.Description>;
    },
  },
};

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
          src={`https:${project.fields.banner.fields.file.url}`}
          alt="Banner"
          width={"2148px"}
          height={"650px"}
          layout="responsive"
          objectFit="cover"
        />
        <S.LogoWrapper $isOpen={isOpen}>
          <Image
            src={`https:${project.fields.logo.fields.file.url}`}
            alt="Logo"
            layout="responsive"
            objectFit="contain"
            width={"100%"}
            height={"100%"}
          />
        </S.LogoWrapper>
      </S.Banner>
      <S.Content $isOpen={isOpen}>
        <S.Title>{project.fields.title}</S.Title>
        {documentToReactComponents(
          project.fields.description,
          RICHTEXT_OPTIONS
        )}
        <S.Icons>
          {project.fields.stack.map((tech, index) => (
            <TechIcon key={index} type={tech as Tech} />
          ))}
        </S.Icons>
        <S.ButtonsContainer>
          {project.fields.liveUrl && (
            <Button link={project.fields.liveUrl} icon={Globe}>
              Acessar
            </Button>
          )}
        </S.ButtonsContainer>
      </S.Content>
    </S.Wrapper>
  );
};
