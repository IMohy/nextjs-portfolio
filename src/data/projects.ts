import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js and TypeScript',
    image: 'https://picsum.photos/id/1/200/300',
    stack: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
    ],
    github: '',
    url: 'https://yourportfolio.com'
  },
]; 