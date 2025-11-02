import { NavigationProps, SkillCardProps, SocialIcon } from "@/types/types";
import { Circle, Github, GithubIcon, Instagram, Linkedin, Mail } from "lucide-react";
import { FaItchIo } from "react-icons/fa6";

export const navigationLinks: NavigationProps[] = [
    { href: "#overview", label: "Overview", active: true },
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "My Skills" },
    { href: "#projects", label: "My Projects" },
    { href: "#contact", label: "Contact Me" },
];

export const skills: SkillCardProps[] = [
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
        title: "Unity",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
        title: "3D Artist",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
        title: "Blender",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        title: "C#",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        title: "Responsive UI",
    },
];

export const socialLinks: SocialIcon[] = [
    {
        href: "https://www.instagram.com/le3dart",
        icon: Instagram,
        color: "orange"
    },
    {
        href: "https://www.linkedin.com/feed",
        icon: Linkedin,
        color: "sky",
    },
    {
        href: "mailto:laithmohsen24@gmail.com",
        icon: Mail,
        color: "green",
    },
    {
        href: "https://mostaql.com/u/laithAlmohsen",
        icon: Circle,
        color: "blue",
    },
    {
        href: "https://laithmohsen6.itch.io/",
        icon: FaItchIo,
        color: "rose",
    },
];