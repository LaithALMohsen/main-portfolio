"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AboutTitle({
    children,
    index,
    setActiveIndex,
}: {
    children: React.ReactNode;
    index: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        } else {
            setActiveIndex((prev) => (prev === index ? null : prev));
        }
    }, [isInView, index, setActiveIndex]);

    return (
        <p
            ref={ref}
            className={cn(
                "text-4xl font-bold py-24 transition",
                isInView ? "text-primary" : "text-gray-300 dark:text-gray-700"
            )}
        >
            {children}
        </p>
    );
}
