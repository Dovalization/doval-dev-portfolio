import { Project, Testimonial as TestimonialT } from "@/types/common";
import { HomeProps } from "@pages/index";
import { CasesSection } from "./CasesSection";
import { HeroSection } from "./HeroSection";
import * as S from "./styles";
import { TestimonialsSection } from "./TestimonialsSection";

// Layouts are responsible for holding different components together
// this can be achieved by creating multiple sections whithin the layout

// Naming convention:
// - LayoutName: "MyLayout"
// - LayoutNameProps: "MyLayoutProps"

// Layout prop types should be the same or extend the page's prop types
// In this case, since we're not extending the page's prop types, we use type instead of interface

type HomeLayoutProps = HomeProps;

// For components and layouts, the return type is inferred from the component
// Props should be destructured before being passed to the component, like so:

const mockTestimonial: TestimonialT = {
  authorName: "Daniel Cunha",
  authorTitle: "Software Engineer at Adalo",
  avatar: "/images/testimonial-author.jpg",
  id: "1",
  text: "Guilherme is such a great person and software engineer that's barely impossible to find someone like him. Challenges are never too big for him, always coming up with a solution and helping people to solver their problems.",
};

const mockTestimonials = [mockTestimonial, mockTestimonial, mockTestimonial];

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
  stack: ["React", "NextJS", "TypeScript"],
  title: "Maria Luiza - Centro de Estética",
};

const mockProjects = [mockProject, mockProject, mockProject];

export const HomeLayout = ({ title }: HomeLayoutProps) => {
  return (
    <S.Wrapper>
      <HeroSection title={title} />
      <CasesSection projects={mockProjects} />
      <TestimonialsSection testimonials={mockTestimonials} />
    </S.Wrapper>
  );
};
