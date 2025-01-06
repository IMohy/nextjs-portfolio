import React from "react";
import { Project } from "@/types/project";
import { Button, Card, Tag, Typography } from "antd";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const { Title, Paragraph } = Typography;

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      className={`card_stylings max-w-[345px] shadow  border-white/40 border-4 projectCard`}
      cover={
        <>
          <img src={project.image} alt={project.name} className="h-[200px] object-cover border-b-2 border-white/40" />
        </>
      }
    >
      <Title className="!text-[#1fdf64] mb-4" level={4}>
        {project.name}
      </Title>
      <Paragraph className="text-white mb-4" style={{ marginBottom: 16 }}>
        {project.description}
      </Paragraph>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <Tag
              color="green"
              key={tech.name}
              style={{
                margin: 2,
              }}
            >
              {tech.name}
            </Tag>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <Button icon={<BsGithub />} onClick={() => window.open(project.github, "_blank")}>
              GitHub
            </Button>
          )}
          {project.url && (
            <Button icon={<BsBoxArrowUpRight />} onClick={() => window.open(project.url, "_blcla")}>
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
