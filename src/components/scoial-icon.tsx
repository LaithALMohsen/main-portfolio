import { SocialIcon } from "@/types/types";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export default function ScoialIcon({ href, icon: Icon, color }: SocialIcon) {
  const colorClasses: Record<string, string> = {
    green: "hover:text-green-500 hover:border-green-500 hover:shadow-green-500/30",
    zinc: "hover:text-zinc-500 hover:border-zinc-500 hover:shadow-zinc-500/30",
    rose: "hover:text-rose-500 hover:border-rose-500 hover:shadow-rose-500/30",
    blue: "hover:text-blue-500 hover:border-blue-500 hover:shadow-blue-500/30",
    sky: "hover:text-sky-500 hover:border-sky-500 hover:shadow-sky-500/30",
  };

  const styles = colorClasses[color] ?? "text-muted border-primary";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "shadow-lg w-11 h-11 rounded-full p-1.5 hover:scale-105 transition-all border-2 border-primary",
        styles
      )}
    >
      <Icon className="w-full h-full transition-all" />
    </Link>
  );
}
