import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="p-2 py-4 flex justify-center items-center bg-slate-50 dark:bg-black">
      <Button variant={"link"} size={"lg"} asChild>
        <a
          href="https://www.facebook.com/profile.php?id=61577160189304&locale=ar_AR"
          target="_blank"
        >
          Website Made By <span className="font-medium">@Abdelrahman.2025</span>
        </a>
      </Button>
    </footer>
  );
}
