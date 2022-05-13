import { Collapsible } from "@/components/Collapsible";
import { Project } from "@/types/common";
import * as S from "./styles";

interface CasesSectionProps {
  projects: Project[];
}

export const CasesSection = ({ projects }: CasesSectionProps) => {
  return (
    <S.Wrapper>
      <S.ProjectsContainer>
        {projects.map((project, index) => (
          <Collapsible project={project} key={index} />
        ))}
      </S.ProjectsContainer>
    </S.Wrapper>
  );
};
