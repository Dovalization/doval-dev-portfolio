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
    banner: "/images/hc-banner.jpg",
    logo: "/images/hc-logo.png",
    description:
      "Horizon Chase é uma releitura moderna dos clássicos jogos de corrida da década de 90 para fãs de arcade.<br/><br/>O jogo traz uma direção de arte única, com uma paleta colorida e luminosa que mistura ambientes low-poly com fundos 2D cheios de detalhes. <br/><br/>Os controles priorizam funcionalidade e conforto, garantindo uma empolgante experiência no estilo arcade. <br/><br/>Composta por Barry Leitch (de Top Gear, Lotus e série Rush), a trilha sonora é energética, inspirada em Techno e exclusiva.",
    id: "1",
    links: {
      live: "https://www.horizonchase.com/",
    },
    stack: ["React", "NextJS", "TypeScript", "Prismic", "StyledComponents"],
    title: "Horizon Chase",
  },
  {
    id: "2",
    banner: "/images/wonderbox-banner.png",
    logo: "/images/wonderbox-logo.png",
    title: "Wonderbox",
    stack: ["JavaScript", "HTML", "CSS"],
    description:
      "Criar e explorar são a essência do Wonderbox, um jogo do tipo action-adventure que tem como cenário belíssimos dioramas.  Os jogadores descobrem esse universo em expansão junto com amigos ou familiares, onde eles podem criar e compartilhar suas próprias aventuras.",
    links: {
      live: "https://www.playwonderbox.com/",
    },
  },
  {
    banner: "/images/del-paraiso-banner.jpg",
    logo: "/images/del-paraiso-logo.png",
    description:
      "O Del Paraíso Residencial está localizado em um dos circuitos turísticos mais bonitos do Estado do Rio de Janeiro. Um verdadeiro refúgio de paz e tranquilidade entre montanhas, cachoeiras, bosques e muita beleza natural. Site institucional desenvolvido para Papori - Get Social.",
    id: "3",
    links: {
      live: "https://delparaiso.com.br/",
    },
    stack: ["WordPress", "JavaScript", "HTML", "CSS"],
    title: "Del Paraíso",
  },
  {
    banner: "/images/maria-luiza-banner.jpg",
    logo: "/images/maria-luiza-logo.svg",
    description:
      "Desenvolvido para Papori - Get Social, Maria Luiza - Centro de Estética é uma estética localizada na região de Cascais em Portugal. Desenvolvido utizando Wordpress foi mais uma entrega na qual o cliente ficou plenamente satisfeito com os resultados, além de gerar tráfego para o comércio local.",
    id: "4",
    links: {
      live: "http://marialuiza.pt/",
    },
    stack: ["WordPress", "JavaScript", "HTML", "CSS"],
    title: "Maria Luiza",
  },
  {
    banner: "/images/dr-joao-banner.jpg",
    logo: "/images/dr-joao-logo.png",
    description:
      "Dr. João Diogo Martins é um Otorrinolaringologista atuando em Lisboa, Portugal. O site institucional foi desenvolvido para Papori - Get Social em mais uma parceria que resultou na plena satisfação do cliente.Especialista em Otorrinolaringologia geral, cirurgia endoscópica nasal e sinusale vertigem.",
    id: "5",
    links: {
      live: "https://drjoaodiogomartins.pt/",
    },
    stack: ["WordPress", "JavaScript", "HTML", "CSS"],
    title: "Dr. João Diogo Martins",
  },
  {
    banner: "/images/5ej-banner.png",
    logo: "/images/5ej-logo.svg",
    description:
      "A Academia Five Elements Jiu-Jitsu tem por missão o ensino e difusão do Gracie Jiu-Jitsu como um completo sistema de defesa pessoal, como estilo de vida e formação do carácter dos nossos alunos.",

    id: "6",
    links: {
      live: "https://fiveelementsjiujitsu.com/",
    },
    stack: ["WordPress", "JavaScript", "HTML", "CSS"],
    title: "Five Elements Jiu-Jitsu",
  },
  {
    banner: "/images/upkd-banner.png",
    logo: "/images/upkd-logo.png",
    description:
      "Associação fundada em 2008, a UPKD – União Portuguesa de Karate-Do nasceu do trabalho conjunto de uma mão-cheia dos alunos mais antigos do Mestre Raul Cerveira, um dos nomes maiores do Karate em Portugal.",
    id: "7",
    links: {
      live: "https://upkd.org/",
    },
    stack: ["WordPress", "JavaScript", "HTML", "CSS"],
    title: "União Portuguesa de Karate-Do",
  },
  {
    banner: "/images/pmadv-banner.jpg",
    logo: "/images/pmadv-logo.png",
    id: "7",
    links: {
      live: "http://pmadv.com.br/",
    },
    stack: ["WordPress", "JavaScript", "HTML", "CSS"],
    title: "Pereira & Maron",
    description:
      "A Pereira & Maron Advogados Associados presta assessoria aos seus clientes nas áreas de Societário e Empresas, Direito Civil, Fusões e Aquisições, Tributário, Imigração e Comércio Exterior. Nossa experiência cresce em conjunto com as demandas dos clientes. Correspondentes em Portugal e China (Lisboa e Macau).",
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
