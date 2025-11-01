"use client";
import { ProjectCardProps } from "@/types/types";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

export default function ProjectCard({
    thumbnail,
    title,
    description,
    badges,
    onClick,
}: ProjectCardProps) {
    return (
        <motion.div
            layoutId={`project-${title}`}
            onClick={onClick}
            className="bg-background shadow-sm border rounded-lg overflow-hidden hover:shadow-md hover:bg-accent/50 cursor-pointer hover:scale-101 transition-all"
        >
            <motion.div className="aspect-[16/10]" layoutId={`project-img-${title}`}>
                <img
                    src={thumbnail}
                    alt="Image"
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <motion.div className="p-5" layoutId={`project-body-${title}`}>
                <h2 className="font-bold text-lg">{title}</h2>
                <p className="mt-2 text-sm">
                    {description.split(" ").slice(0, 11).join(" ")}
                    {description.split(" ").length > 11 && "..."}{" "}
                </p>
                <div className="flex flex-wrap justify-end gap-2 mt-4">
                    {badges.map((badge, index) => {
                        return <Badge key={index}>{badge}</Badge>;
                    })}
                </div>
            </motion.div>
        </motion.div>
    );
}
