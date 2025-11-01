import { SkillCardProps } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function SkillCard({ src, title }: SkillCardProps) {
  return (
    <div className="flex justify-center items-center gap-2 bg-background border rounded-lg hover:shadow-md hover:bg-accent hover:scale-105 transition-all select-none py-2 px-4">
      <div className="w-full h-fit flex justify-center items-center">
        <img src={src} alt="" className="img-border rounded-sm w-[38px] h-[38px]" />
      </div>
      <h2 className="text-lg text-nowrap">{title}</h2>
    </div>
  );
}
