"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NavigationLink {
  text: string;
  href: string;
}

interface HeaderProps {
  navigationLinks: NavigationLink[];
}

function Header({ navigationLinks }: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="flex flex-wrap items-stretch w-full px-[1.63rem] py-[1.94rem]">
        <div
          className="flex flex-wrap items-stretch w-full px-[1.63rem] py-[1.94rem] border-gradient"
          id="header-border"
        >
          <div className="flex flex-wrap justify-between items-center w-3/4 lg:w-1/4">
            <Link href="/" passHref className="flex items-center">
              <Image
                src="/logo.png"
                width={400}
                height={100}
                className="mr-3 w-fit h-8"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex items-end justify-end lg:order-2 w-1/4 lg:w-3/4">
            <div
              className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} />
            </div>

            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } justify-end items-center lg:order-1 hidden lg:flex`}
              id="mobile-menu-1"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      passHref
                      className="block px-[2.28rem] lg:p-0 text-white font-semibold text-lg"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              
            </div>
            <div className="clip-cut" />
          </div>
        </div>
        <div className="flex w-full lg:hidden items-start justify-start lg:order-2">
          <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } justify-start items-end lg:order-1 w-full  `}
            id="mobile-menu-2"
          >
            <ul className="w-full flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-00">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    passHref
                    className="block py-4 text-white font-semibold text-lg"
                  >
                    {link.text}
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
