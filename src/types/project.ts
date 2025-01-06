export interface ProjectStack {
  name: string;
  icon?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  stack: ProjectStack[];
  url?: string;
  github?: string;
} 