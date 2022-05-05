export interface Project {
  id: string;
  title: string;
  description: string;
  logo: string;
  banner: string;
  stack: Tech[];
  links: {
    live?: string;
    code?: string;
  };
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorTitle: string;
  avatar: string;
  text: string;
}

export type Tech =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "WordPress"
  | "NodeJS"
  | "Prisma"
  | "Prismic"
  | "NextJS"
  | "React"
  | "StyledComponents"
  | "Sass";
