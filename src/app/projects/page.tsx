"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/Cards/ProjectCard";
import { Typography, Card, Skeleton, Tag, Space } from "antd";
import { fetchPortfolioData } from "@/api/projects";
import { useQuery } from "@tanstack/react-query";
import ImageAndParagraphSkeleton from "@/components/shared/ImageAndParagraphSkeleton";

const { Title } = Typography;

const ProjectSkeleton = () => (
  <div className="card_stylings transition  border-4 border-white w-[345px] h-[497px]">
    <div style={{ padding: 16 }}>
      <ImageAndParagraphSkeleton className="p-8 h-full w-full relative" />
    </div>
  </div>
);

const ProjectsPage = () => {
  const [selectedStack, setSelectedStack] = useState<string | null>(null);

  const { isLoading, data } = useQuery({
    queryKey: ["background"],
    queryFn: fetchPortfolioData,
  });

  const uniqueStacks = React.useMemo(() => {
    if (!data) return [];
    const stacks = data.flatMap((project) => project.stack || []);
    const uniqueStackNames = Array.from(new Set(stacks.map((stack) => stack.name)));
    return uniqueStackNames;
  }, [data]);

  const filteredProjects = React.useMemo(() => {
    if (!selectedStack) return data;
    return data?.filter((project) => project.stack?.some((stack) => stack.name === selectedStack));
  }, [data, selectedStack]);

  return (
    <div style={{ padding: 24 }}>
      <Title level={1} className="!text-[#1fdf64] text-center mb-12">
        Projects
      </Title>
      <div className="flex flex-col gap-y-4">
        <Space size={[0, 8]} wrap>
          <Tag.CheckableTag
            checked={selectedStack === null}
            onChange={() => setSelectedStack(null)}
            style={{
              fontSize: "14px",
              padding: "4px 8px",
              border: "1px solid #1fdf64",
              backgroundColor: selectedStack === null ? "#1fdf64" : "transparent",
              color: selectedStack === null ? "#000" : "#1fdf64",
            }}
          >
            All
          </Tag.CheckableTag>
          {uniqueStacks.map((stack) => (
            <Tag.CheckableTag
              key={stack}
              checked={selectedStack === stack}
              onChange={() => setSelectedStack(stack)}
              style={{
                fontSize: "14px",
                padding: "4px 8px",
                border: "1px solid #1fdf64",
                backgroundColor: selectedStack === stack ? "#1fdf64" : "transparent",
                color: selectedStack === stack ? "#000" : "#1fdf64",
              }}
            >
              {stack}
            </Tag.CheckableTag>
          ))}
        </Space>
      </div>

      <div className="flex flex-wrap gap-4 justify-start p-4">
        {isLoading
          ? Array(12)
              .fill(null)
              .map((_, index) => <ProjectSkeleton key={index} />)
          : filteredProjects?.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </div>
  );
};

export default ProjectsPage;
