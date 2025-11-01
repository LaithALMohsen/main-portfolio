"use client";
import { ProjectCardProps } from "@/types/types";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import Link from "next/link";
import { Code2Icon } from "lucide-react";

interface ProjectModalProps {
    selected: ProjectCardProps | null;
    setSelected: React.Dispatch<React.SetStateAction<ProjectCardProps | null>>;
}

export default function ProjectModal({
    selected,
    setSelected,
}: ProjectModalProps) {
    if (!selected) {
        return <></>;
    }

    return (
        <div
            // onClick={() => setSelected(null)}
            className="fixed flex justify-center items-center inset-0 bg-black/50 z-50 cursor-pointer"
        >
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-background shadow-sm border rounded-lg w-full max-w-[900px] cursor-default"
            >
                <Button
                    className="absolute -top-3 -right-3 z-50 rounded-full"
                    size={"icon"}
                    onClick={() => setSelected(null)}
                >
                    X
                </Button>
                <motion.div layoutId={`project-img-${selected.title}`}>
                    <Carousel className="w-full">
                        <CarouselContent>
                            <CarouselItem className="aspect-video w-full">
                                <img
                                    src={selected.thumbnail}
                                    alt="Shoes"
                                    className="rounded-t-lg w-full h-full object-contain"
                                />
                            </CarouselItem>
                            {selected.images.map((src, index) => (
                                <CarouselItem
                                    className="aspect-video w-full"
                                    key={index}
                                >
                                    <img
                                        src={src}
                                        alt="Shoes"
                                        className="rounded-t-lg w-full h-full object-contain"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-3 scale-125" />
                        <CarouselNext className="absolute -right-3 scale-125" />
                    </Carousel>
                </motion.div>
                <motion.div
                    className="p-5"
                    layoutId={`project-body-${selected.title}`}
                >
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-2xl">{selected.title}</h2>
                        {selected.link && (
                            <Link href={selected.link} target="_blank">
                                <Button SuffixIcon={Code2Icon}>View</Button>
                            </Link>
                        )}
                    </div>
                    <p className="mt-2 text-sm">{selected.description}</p>
                    <div className="flex justify-end gap-2 mt-3">
                        {selected.badges.map((badge, index) => {
                            return <Badge key={index}>{badge}</Badge>;
                        })}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
