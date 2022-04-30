import { Project } from "@/types/common";
import * as S from "./styles";

interface CasesSectionProps {
  projects: Project[];
}

const projectsMock = [
  {
    id: "1",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: "2",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: "3",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export const CasesSection = ({}: CasesSectionProps) => {
  return (
    <S.Wrapper>
      <S.ProjectsContainer>
        {projectsMock.map((project) => (
          <S.ProjectWrapper key={project.id}>{project.title}</S.ProjectWrapper>
        ))}
      </S.ProjectsContainer>
    </S.Wrapper>
  );
};
