import { Collapsible } from "@/components/Collapsible";
import { IProjectFields } from "@/types/contentful.pages";
import bgImage from "@public/images/doval-dev-cases-background.png";
import { Entry } from "contentful";
import Image from "next/image";
import * as S from "./styles";

interface CasesSectionProps {
  projects: Entry<IProjectFields>[];
}

export const CasesSection = ({ projects }: CasesSectionProps) => {
  return (
    <S.Wrapper>
      <S.BackgroundWrapper>
        <Image
          src={bgImage}
          alt=""
          fill
          quality={100}
          style={{ objectFit: "contain" }}
        />
      </S.BackgroundWrapper>
      <S.ProjectsContainer>
        {projects.map((project, index) => (
          <Collapsible project={project} key={index} />
        ))}
      </S.ProjectsContainer>
    </S.Wrapper>
  );
};
