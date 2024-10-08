import { ModeToggle } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/news/1", text: "Мэдээ" },
];

export const Header = () => {
  return (
    <header className="bg-black dark:bg-white top-0 absolute w-full z-10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-between gap-x-4">
          <Link href="/">
            <Image
              src={"/workmaster/logo.jpeg"}
              alt={"logo"}
              width={40}
              height={40}
            ></Image>
          </Link>
          <ModeToggle />
        </div>
        <div className="flex space-x-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-blue-500 font-semibold dark:text-black dark:hover:text-blue-400"
            >
              {link.text}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
