import { Project, Testimonial as TestimonialT } from "@/types/common";
import { HomeProps } from "@pages/index";
import { AboutSection } from "./AboutSection";
import { CasesSection } from "./CasesSection";
import { ContactSection } from "./ContactSection";
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

const mockTestimonials: TestimonialT[] = [
  {
    authorName: "Daniel Cunha",
    authorTitle: "Software Engineer @ Adalo",
    avatar: "/images/dani.jpg",
    id: "1",
    text: "Guilherme is such a great person and software engineer that's barely impossible to find someone like him. Challenges are never too big for him, always coming up with a solution and helping people to solve their problems.",
  },
  {
    authorName: "Paula Gonçalves",
    authorTitle: "Partner @ Papori: Get Social",
    avatar: "/images/paula.jpg",
    id: "2",
    text: "Tenho trabalhado com o Guilherme no último ano em projectos digitais e estou bastante satisfeita com a nossa parceria. O Guilherme é metódico, responsável e cumpridor. As entregas são de qualidade e o trabalho final é bastante bom. Consegue ter um aprumo estético importante que alia à sua capacidade técnica - programação, o que o torna bastante versátil ",
  },
  {
    authorName: "Giovanni Zambiasi",
    authorTitle: "Lead Game Programmer @ Kokku",
    avatar: "/images/giovanni.jpg",
    id: "3",
    text: "Guilherme Doval is a great person to work with. Very willing and capable to learn, determined to do what he can to make sure everything is as good as it could be. Good at keeping things organized, and supporting the whole development process, without giving up at turbulent times. Capable of adapting to new tools and worflows, interested in going above average, his projects stand out. ",
  },
  {
    authorName: "Jefferson Pinheiro",
    authorTitle: "Unreal Engine God / Master in Computer Science",
    avatar: "/images/jeff.jpg",
    id: "4",
    text: "It was a great pleasure teaching Guilherme because he's the kind of student that wants to learn everything (programming, art, etc.), pays attention to the classes, learns fast, does all works with excellence, and is well able to look for answers on his own. Sometimes he would also share with me new techniques and tools; I have also learned much from him. I can attest for his technical, programming and artistic skills.",
  },
];
const mockProjects: Project[] = [
  {
    banner: "/images/maria-luiza-banner.jpg",
    logo: "/images/maria-luiza-logo.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "1",
    links: {
      code: "https://github.com/",
      live: "https://www.google.com/",
    },
    stack: ["React", "NextJS", "TypeScript"],
    title: "Maria Luiza - Centro de Estética",
  },
  {
    banner: "/images/dr-joao-banner.jpg",
    logo: "/images/dr-joao-logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "2",
    links: {
      code: "https://github.com",
      live: "https://www.google.com",
    },
    stack: ["React", "NextJS", "TypeScript"],
    title: "Dr. João Diogo Martins - Otorrinolaringologista",
  },
  {
    banner: "/images/del-paraiso-banner.jpg",
    logo: "/images/del-paraiso-logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "3",
    links: {
      code: "https://github.com",
      live: "https://www.google.com",
    },
    stack: ["React", "NextJS", "TypeScript"],
    title: "Del Paraiso - Residencial",
  },
  {
    banner: "/images/hc-banner.jpg",
    logo: "/images/hc-logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "4",
    links: {
      code: "https://github.com",
      live: "https://www.google.com",
    },
    stack: ["React", "NextJS", "TypeScript"],
    title: "Horizon Chase",
  },
  {
    banner: "/images/pmadv-banner.jpg",
    logo: "/images/pmadv-logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "5",
    links: {
      code: "https://github.com",
      live: "https://www.google.com",
    },
    stack: ["React", "NextJS", "TypeScript"],
    title: "Pereira & Maron - Advogados Associados",
  },
];

export const HomeLayout = ({ title }: HomeLayoutProps) => {
  return (
    <S.Wrapper>
      <HeroSection title={title} />
      <CasesSection projects={mockProjects} />
      <TestimonialsSection testimonials={mockTestimonials} />
      <AboutSection />
      <ContactSection />
    </S.Wrapper>
  );
};
