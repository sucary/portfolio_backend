export enum Tech {
  TypeScript = "TypeScript",
  ExpressJS = "ExpressJS",
  NodeJS = "NodeJS",
  React = "React",
  Angular = "Angular",
  Vue = "Vue",
  CSharp = "C#",
  Unity = 'Unity',
  
}

export enum ContactType {
  Github = "github",
  Email = "email",
  LinkedIn = "linkedin",
  Phone = "phone",
}

export interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
  tech: Tech[];
}

export interface Contact {
  type: ContactType[];
  value: string;
  displayName?: string;
  icon?: string;
}

export type ProjectWithoutId = Omit<Project, 'id'>;