export interface Project {
  id: string;
  title: string;
  description: string;
  logo: string;
  banner: string;
  stack: string[];
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
