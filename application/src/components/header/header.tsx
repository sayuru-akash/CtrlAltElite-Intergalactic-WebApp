'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLink {
  text: string;
  href: string;
}

interface HeaderProps {
  // You can add any necessary props here
}

function Header(props: HeaderProps) {
  const [navigationLinks, setNavigationLinks] = useState<NavLink[]>([]);

  useEffect(() => {
    const fetchedLinks: NavLink[] = [
      { text: "Home", href: "#" },
      { text: "Company", href: "#" },
    ];
    setNavigationLinks(fetchedLinks);
  }, []);

  return (
    <header>
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="https://flowbite.com" passHref>
            <a className="flex items-center">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                width={10}
                height={10}
                className="mr-3"
                alt="Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Intergalactic
              </span>
            </a>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ... SVG paths */}
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navigationLinks.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} passHref>
                    <a className="block py-2 pr-4 pl-3 rounded lg:p-0">
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
