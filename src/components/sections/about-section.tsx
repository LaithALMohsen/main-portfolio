"use client";

import { useRef, useState } from "react";
import AboutTitle from "../about-title";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFade } from "../magicui/blur-fade";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

interface aboutProps {
    title: string;
    card: {
        title?: string;
        image?: string;
        color: string;
        rotation?: number;
    };
}

const features: aboutProps[] = [
    {
        title: "Independent game developer with 3+ years of experience in Unity",
        card: {
            image: "/icons/unity.png",
            color: "from-slate-50 to-slate-300 shadow-slate-500/75",
        },
    },
    {
        title: "Skilled at creating diverse, high-quality assets tailored for game development",
        card: {
            image: "/icons/package.png",
            color: "from-orange-200 to-orange-500 shadow-orange-500/75",
            rotation: -5,
        },
    },
    {
        title: "Created multiple 2D and 3D PC games focused on engaging player experiences",
        card: {
            image: "/icons/game-console.png",
            color: "from-sky-200 to-sky-500 shadow-sky-500/75",
        },
    },
    {
        title: "3D artist with 2.5+ years of experience in Blender, specializing in digital sculpting",
        card: {
            image: "/icons/blender.png",
            color: "from-amber-200 to-amber-500 shadow-amber-500/75",
            rotation: 5,
        },
    },
    {
        title: "Produced High Poly and Low Poly models optimized for both performance and visuals",
        card: {
            image: "/icons/3d.png",
            color: "from-yellow-200 to-yellow-500 shadow-yellow-500/75",
            rotation: -5,
        },
    },
];

export default function AboutSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="about" className="bg-slate-50 dark:bg-black">
            <motion.h1
                className="pt-20 text-center text-5xl font-bold text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-300"
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
                <BlurFade delay={0.45}>About Me</BlurFade>
            </motion.h1>
            <motion.div
                className="grid grid-cols-2 gap-5 px-6 lg:px-32 max-sm:hidden"
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
                    delay: 0.6,
                }}
            >
                <div className="w-full py-72">
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>
                                <AboutTitle
                                    key={index}
                                    index={index}
                                    setActiveIndex={setActiveIndex}
                                >
                                    {feature.title}
                                </AboutTitle>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=" w-full sticky top-0 h-[90vh] flex justify-center items-center">
                    <div
                        className={cn(
                            "flex justify-center items-center text-[10rem] text-white aspect-square rounded-3xl w-3/4 xl:w-2/3 bg-gradient-to-br transition",
                            activeIndex !== null &&
                                "hover:scale-105 hover:rotate-5 active:scale-90 select-none",
                            activeIndex !== null
                                ? `shadow-2xl ${features[activeIndex].card.color}`
                                : "from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600"
                        )}
                        style={{
                            transform:
                                activeIndex !== null &&
                                features[activeIndex].card.rotation
                                    ? `rotate(${features[activeIndex].card.rotation}deg)`
                                    : undefined,
                        }}
                    >
                        {activeIndex !== null &&
                            features[activeIndex].card.title &&
                            features[activeIndex].card.title}
                        {activeIndex !== null &&
                            features[activeIndex].card.image && (
                                <div className="relative w-2/3 h-2/3">
                                    <Image
                                        src={features[activeIndex].card.image}
                                        alt=""
                                        fill
                                    />
                                </div>
                            )}
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="sm:hidden flex flex-col gap-2 text-lg text-muted-foreground size-full overflow-hidden px-4 md:px-6 mx-auto py-20"
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
                    delay: 0.6,
                }}
            >
                <p>
                    Independent game developer with 3+ years of experience in
                    Unity
                </p>
                <p>
                    Created multiple 2D and 3D PC games focused on engaging
                    player experiences
                </p>
                <p>
                    3D artist with 2.5+ years of experience in Blender,
                    specializing in digital sculpting
                </p>
                <p>
                    Produced High Poly and Low Poly models optimized for both
                    performance and visuals
                </p>
                <p>
                    Skilled at creating diverse, high-quality assets tailored
                    for game development
                </p>

                <Button
                    className="mt-5 w-fit"
                    variant={"outline"}
                    PrefixIcon={ArrowDown}
                    asChild
                >
                    <Link href="#skills">Explore More</Link>
                </Button>
            </motion.div>
        </section>
    );
}
