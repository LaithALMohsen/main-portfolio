"use client";
import { ProjectCardProps } from "@/types/types";
import { BlurFade } from "../magicui/blur-fade";
import { motion } from "framer-motion";
import ProjectCard from "../project-card";
import { useState } from "react";
import ProjectModal from "../project-modal";
import { projectsData } from "@/data/projects";

export default function ProjectsSection() {
    const [selected, setSelected] = useState<ProjectCardProps | null>(null);

    return (
        <main id="projects" className="bg-slate-50 dark:bg-black">
            <section className="relative w-screen overflow-hidden flex flex-col justify-center items-center px-4 md:px-6 max-w-[65rem] xl:max-w-[80rem] mx-auto py-20">
                <motion.h1
                    className="mb-20 max-w-4xl text-center text-5xl font-bold text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-300"
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        delay: 0.3,
                    }}
                >
                    <BlurFade delay={0.45}>My Projects</BlurFade>
                </motion.h1>

                <div className="flex flex-col gap-10">
                    {projectsData.map((data, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.5,
                                }}
                            >
                                <h2 className="w-fit mx-auto bg-background border py-2 px-20 rounded-md text-center mb-4 text-3xl font-bold text-slate-700 dark:text-slate-300">
                                    {data.label}
                                </h2>
                                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                    {data.projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                thumbnail={project.thumbnail}
                                                title={project.title}
                                                description={
                                                    project.description
                                                }
                                                badges={project.badges}
                                                images={project.images}
                                                onClick={() =>
                                                    setSelected(project)
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <ProjectModal selected={selected} setSelected={setSelected} />
            </section>
        </main>
    );
}
