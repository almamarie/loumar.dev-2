export type ProjectType = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  url: string;
  image: string;
  type?: "fullstack" | "frontend" | "backend"
};
