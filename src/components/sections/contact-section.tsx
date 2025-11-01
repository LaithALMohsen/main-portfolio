"use client";
import { motion } from "framer-motion";
import ScoialIcon from "../scoial-icon";
import { BlurFade } from "../magicui/blur-fade";
import { socialLinks } from "@/data/data";

export default function ContactSection() {
  return (
    <main id="contact" className="bg-background">
      <section className="relative w-screen overflow-hidden flex flex-col justify-center items-center px-4 md:px-6 max-w-[65rem] xl:max-w-[80rem] mx-auto py-20">
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
          <BlurFade delay={0.45}>Conatact Me</BlurFade>
        </motion.h1>

        <motion.p
          className="mt-10 text-xl font-normal text-neutral-700 dark:text-neutral-300 text-left"
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
            delay: 0.45,
          }}
        >
          Let’s build something great together!
        </motion.p>

        <motion.div
          className={"flex items-center gap-4 mt-4"}
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.55,
          }}
        >
          {socialLinks.map((link, index) => (
            <ScoialIcon
              key={index}
              href={link.href}
              icon={link.icon}
              color={link.color}
            />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
