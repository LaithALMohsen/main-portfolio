"use client";

import { motion } from "framer-motion";
import SkillCard from "../skill-card";
import { BlurFade } from "../magicui/blur-fade";
import { skills } from "@/data/data";

export default function SkillsSection() {
    return (
        <main id="skills" className="bg-background">
            <section className="relative size-full overflow-hidden flex flex-col justify-center items-center px-4 md:px-6 mx-auto py-20">
                {/* <LampContainer> */}
                    <motion.h1
                        className="max-w-4xl text-center text-5xl font-bold text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-300"
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
                        <BlurFade delay={0.45}>My Skills</BlurFade>
                    </motion.h1>
                    <motion.p
                        className="text-center text-muted-foreground pt-5"
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
                            delay: 0.7,
                        }}
                    >
                        Game development using Unity 3D and Blender for creating interactive 2D and 3D experiences.
                    </motion.p>

                    <motion.div
                        className="flex justify-center items-center flex-wrap gap-2 pt-10"
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
                            delay: 0.9,
                        }}
                    >
                        {skills.map((skill, index) => {
                            return (
                                <SkillCard
                                    key={index}
                                    src={skill.src}
                                    title={skill.title}
                                />
                            );
                        })}
                    </motion.div>
                {/* </LampContainer> */}
            </section>
        </main>
    );
}
