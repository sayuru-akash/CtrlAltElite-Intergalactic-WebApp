import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
}

function Header(props: HeaderProps) {
  const navigationLinks = [
    { text: "HOME", href: "/" },
    { text: "BOOKING HISTORY", href: "/history" },
    { text: "MY ACCOUNT", href: "/account" },
  ];

  const borderStyle = {
    border: '1px solid',
    borderImage: 'linear-gradient(135deg, #00C2FF 0%, #AE01FF 100%)',
    borderImageSlice: '1',
  };

  return (
    <header className="border my-[2.94rem] mx-[3.44rem]"  style={borderStyle}>
      <nav className=" px-[1.63rem] py-[1.94rem]">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl">
          <Link href="" passHref className="flex items-center">
              <Image
                src="/logo.png"
                width={200}
                height={100}
                className="mr-3"
                alt="Logo"
              />
          </Link>
          <div className="flex items-end lg:order-2">
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
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-end items-center lg:flex lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
              {navigationLinks.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} passHref className="block  px-[2.28rem] lg:p-0  text-white font-semibold text-lg">
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
