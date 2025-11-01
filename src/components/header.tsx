"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { useState } from "react";
import { navigationLinks } from "@/data/data";
import { motion } from "framer-motion";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 bg-background md:rounded-b-xl shadow-md border-b px-4 md:px-6 max-w-[65rem] xl:max-w-[80rem] mx-auto"
            initial={{
                opacity: 0,
                y: -100,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                delay: 0.3,
            }}
        >
            <div className="flex h-16 justify-between gap-4">
                {/* Left side */}
                <div className="flex gap-2">
                    {/* Mobile menu trigger */}
                    <div className="flex items-center md:hidden">
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    className="group size-8"
                                    variant="ghost"
                                    size="icon"
                                >
                                    <svg
                                        className="pointer-events-none"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 12L20 12"
                                            className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                                        />
                                        <path
                                            d="M4 12H20"
                                            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                                        />
                                        <path
                                            d="M4 12H20"
                                            className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                                        />
                                    </svg>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                align="start"
                                className="w-36 p-1 md:hidden"
                            >
                                <NavigationMenu className="max-w-none *:w-full">
                                    <NavigationMenuList className="flex-col items-start gap-0">
                                        {navigationLinks.map((link, index) => (
                                            <NavigationMenuItem
                                                key={index}
                                                className="w-full"
                                            >
                                                <NavigationMenuLink
                                                    href={link.href}
                                                    className="py-1.5"
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                >
                                                    {link.label}
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Desktop menu */}
                    <div className="items-center gap-6 max-md:hidden flex">
                        <NavigationMenu className="h-full *:h-full">
                            <NavigationMenuList className="h-full gap-2">
                                {navigationLinks.map((link, index) => (
                                    <NavigationMenuItem
                                        key={index}
                                        className="h-full"
                                    >
                                        <NavigationMenuLink
                                            active={link.active}
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary border-b-primary hover:border-b-primary data-[active]:border-b-primary h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent!"
                                        >
                                            {link.label}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                {/* Right side */}
                <div className="flex items-center gap-2">
                    <ModeToggle />
                </div>
            </div>
        </motion.header>
    );
}
