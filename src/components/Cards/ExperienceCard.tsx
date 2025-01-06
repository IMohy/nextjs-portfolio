import React from "react";
import CardLayout from "../shared/CardLayout";

interface ExpCard {
  id: number;
  title: string;
  role: string;
  url: string;
  desc: string[] | string;
  year: string;
  location: string;
}

interface ExperienceCardProps {
  data: ExpCard;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <CardLayout href={data.url === "N/A" ? undefined : data.url}>
      <div className="card_stylings transition px-8 py-10">
        <div className="flex-initial text-[17px] text-Snow font-medium">{data.title}</div>
        <div className="text-sm text-LightGray font-normal italic mt-1">{data.role}</div>
        <div className="text-LightGray text-xs opacity-50 font-normal italic">
          <a href={data.url === "N/A" ? undefined : data.url} target="_blank" rel="noreferrer">
            {data.url}
          </a>
        </div>
        {typeof data.desc === "string" ? (
          <div className="text-LightGray text-sm font-normal mt-4">{data.desc}</div>
        ) : (
          <div className="flex flex-col gap-y-1">
            {data.desc.map((line: string, index: number) => (
              <p key={index} className="text-LightGray text-sm font-normal mt-4">
                {line}
              </p>
            ))}
          </div>
        )}
        <div className="flex justify-between text-LightGray bg-DeepNightBlack w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal opacity-50">
          <div>{data.year}</div>
          <div>{data.location}</div>
        </div>
      </div>
    </CardLayout>
  );
};

export default ExperienceCard;
