import Image from "next/image";
import Link from "next/link";

interface NavigationLink {
    text: string;
    href: string;
}

interface FooterProps {
    navigationLinks: NavigationLink[];
}

function Footer({ navigationLinks }: FooterProps) {

  return (
    <footer className="rounded-lg px-8 lg:px-44 py-12 hidden lg:block">
        <div className="w-full mx-auto flex flex-col lg:flex-row lg:items-center md:justify-between">
        <Link href="/" passHref className="flex items-center">
              <Image
                src="/logo.png"
                width={400}
                height={100}
                className="mr-3 w-fit h-7"
                alt="Logo"
              />
            </Link>
            <ul className="flex flex-wrap items-center mt-3 sm:mt-0 text-white lg:space-x-16">
                {navigationLinks.map((link) => (
                    <li key={link.href}>
                    <Link
                        href={link.href}
                        passHref
                        className="px-9 lg:p-0 text-white font-semibold text-lg"
                    >
                        {link.text}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
  );
}

export default Footer;