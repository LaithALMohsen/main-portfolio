"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight";
import { BlurFade } from "../magicui/blur-fade";
import { Highlighter } from "../magicui/highlighter";

export default function HeroSection() {
  return (
    <main id="overview">
        <section className="relative w-screen overflow-hidden flex flex-col justify-center items-center min-h-screen px-4 md:px-6 max-w-[65rem] xl:max-w-[80rem] mx-auto pt-20">
        <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
        />

        <div
            className={cn(
            "absolute w-screen left-0 -z-10 pointer-events-none inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,theme(colors.neutral.300)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.neutral.300)_1px,transparent_1px)] opacity-45",
            "dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] dark:opacity-100"
            )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

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
            <BlurFade delay={.45}>
                Hi, I’m Laith👋
            </BlurFade>
        </motion.h1>
        <motion.p
            className="max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
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
            <Highlighter delay={1400} action="box" color="var(--color-purple-500)">
                a Game Developer
            </Highlighter>{" "}
            crafting modern, fast, and {" "}
            <Highlighter delay={1700} action="underline" color="var(--color-purple-500)">
                a 3D artist.
            </Highlighter>
        </motion.p>
        <motion.div
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
                delay: 1.2,
            }}
        >
            <Button SuffixIcon={ArrowDown} asChild>
                <Link href="#about">More About Me</Link>
            </Button>
        </motion.div>
        </section>
    </main>
  );
}
