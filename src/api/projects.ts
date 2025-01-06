import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    name: "E-commerce Dashboard",
    description: "A responsive admin dashboard with real-time analytics, order management, and inventory tracking. Features dark mode and role-based access control.",
    image: "https://picsum.photos/id/3/200/300",
    stack: [{ name: "React" }, { name: "TypeScript" }, { name: "Redux Toolkit" }, { name: "Material UI" }, { name: "Chart.js" }],
    github: "https://github.com/yourusername/ecommerce-dashboard",
    url: "https://ecommerce-dashboard-demo.vercel.app",
  },
  {
    id: "2",
    name: "Task Management App",
    description: "A Trello-inspired task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "https://picsum.photos/id/20/200/300",
    stack: [{ name: "React" }, { name: "TypeScript" }, { name: "React DnD" }, { name: "Firebase" }, { name: "Styled Components" }],
    github: "https://github.com/yourusername/task-manager",
    url: "https://task-manager-demo.netlify.app",
  },
  {
    id: "3",
    name: "Weather Dashboard",
    description: "A weather application featuring 7-day forecasts, location-based weather data, and interactive weather maps using OpenWeatherMap API.",
    image: "https://picsum.photos/id/26/200/300",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "TailwindCSS" }, { name: "OpenWeatherMap API" }],
    github: "https://github.com/yourusername/weather-dashboard",
    url: "https://weather-dashboard-demo.vercel.app",
  },
  {
    id: "4",
    name: "Real Estate Platform",
    description: "A modern real estate platform with property listings, advanced search filters, and virtual tour capabilities.",
    image: "https://picsum.photos/id/42/200/300",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "TypeScript" }, { name: "Prisma" }, { name: "PostgreSQL" }],
    github: "https://github.com/yourusername/real-estate-platform",
    url: "https://real-estate-demo.vercel.app",
  },
  {
    id: "5",
    name: "Social Media Dashboard",
    description: "A social media analytics dashboard showing engagement metrics, follower growth, and content performance across multiple platforms.",
    image: "https://picsum.photos/id/45/200/300",
    stack: [{ name: "React" }, { name: "TypeScript" }, { name: "D3.js" }, { name: "Chakra UI" }, { name: "React Query" }],
    github: "https://github.com/yourusername/social-dashboard",
    url: "https://social-dashboard-demo.netlify.app",
  },
  {
    id: "6",
    name: "Recipe Sharing Platform",
    description: "A community-driven recipe sharing platform with user authentication, recipe creation, and social features.",
    image: "https://picsum.photos/id/48/200/300",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "MongoDB" }, { name: "NextAuth.js" }, { name: "TailwindCSS" }],
    github: "https://github.com/yourusername/recipe-platform",
    url: "https://recipe-platform-demo.vercel.app",
  },
  {
    id: "7",
    name: "Fitness Tracking App",
    description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and nutrition tracking features.",
    image: "https://picsum.photos/id/50/200/300",
    stack: [{ name: "React" }, { name: "TypeScript" }, { name: "Redux" }, { name: "Material UI" }, { name: "React Native" }],
    github: "https://github.com/yourusername/fitness-tracker",
    url: "https://fitness-tracker-demo.vercel.app",
  },
  {
    id: "8",
    name: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with dark mode support and animations.",
    image: "https://picsum.photos/id/60/200/300",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "TypeScript" }, { name: "Framer Motion" }, { name: "TailwindCSS" }],
    github: "https://github.com/yourusername/portfolio",
    url: "https://portfolio-demo.vercel.app",
  }
];
export function fetchPortfolioData() {
  return projects;
}
