"use client";
import { Key } from "react";
import axios from "axios";
import ParagraphSkeleton from "@/components/shared/ParagraphSkeleton";
import EducationCard from "@/components/Cards/EducationCard";
import ExperienceCard from "@/components/Cards/ExperienceCard";
import { useQuery } from "@tanstack/react-query";
import { fetchBackgroundData } from "@/api/background";
import Head from "next/head";

interface EduCard {
    id: number;
    title: string;
    degree: string;
    detail: string;
    year: string;
}

interface ExpCard {
    id: number;
    title: string;
    role: string;
    url: string;
    desc: string;
    year: string;
    location: string;
}

function Background() {
    const { isLoading, data } = useQuery({
        queryKey: ["background"],
        queryFn: fetchBackgroundData,
    });
    return (
        <div className="my-4 p-6 flex flex-col gap-6 bg-white/10">
            <div className="flex flex-col gap-y-4">
                <div className="mt-10 md:mt-0 text-2xl text-Snow font-semibold">Education</div>
                {isLoading
                    ? [1, 2, 3].map((_, i) => <ParagraphSkeleton key={i} className="p-8 h-full w-full relative" />)
                    : data &&
                    data[0]?.eduCards?.map((eduCard: EduCard, key: Key | null | undefined) => (
                        <EducationCard key={key} data={eduCard} />
                    ))}
            </div>
            <div>
                <div className="flex flex-col gap-y-4">
                    <div className="md:pt-0 pt-4 text-2xl text-Snow font-semibold">Experience</div>
                    {isLoading
                        ? [1, 2, 3].map((_, i) => <ParagraphSkeleton key={i} className="p-8 h-full w-full relative" />)
                        : data &&
                        data[1]?.expCards?.map((expCard: ExpCard, key: Key | null | undefined) => (
                            <ExperienceCard 
                                key={key} 
                                data={{
                                    ...expCard,
                                    desc: expCard.desc.split('\n').filter(line => line.trim())
                                }} 
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Background;
