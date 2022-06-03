import { Collapsible } from "@/components/Collapsible";
import { Project } from "@/types/common";
import bgImage from "@public/images/doval-dev-cases-background.png";
import Image from "next/image";
import * as S from "./styles";

interface CasesSectionProps {
  projects: Project[];
}

export const CasesSection = ({ projects }: CasesSectionProps) => {
  return (
    <S.Wrapper>
      <S.BackgroundWrapper>
        <Image
          src={bgImage}
          alt=""
          layout="fill"
          objectFit="contain"
          quality={100}
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
