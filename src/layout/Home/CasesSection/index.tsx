import { Collapsible } from "@/components/Collapsible";
import { Project } from "@/types/common";
import * as S from "./styles";

interface CasesSectionProps {
  projects: Project[];
}

const mockProject: Project = {
  banner: "/images/project-banner.jpg",
  logo: "/images/project-logo.png",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  id: "1",
  links: {
    code: "github.com/",
    live: "https://www.google.com/",
  },
  stack: ["React", "Next.js", "TypeScript"],
  title: "Maria Luiza - Centro de Estética",
};

export const CasesSection = ({}: CasesSectionProps) => {
  return (
    <S.Wrapper>
      <S.ProjectsContainer>
        <Collapsible project={mockProject} />
      </S.ProjectsContainer>
    </S.Wrapper>
  );
};
