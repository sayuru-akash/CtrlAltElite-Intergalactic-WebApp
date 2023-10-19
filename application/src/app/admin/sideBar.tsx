import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavigationLink {
  text: string;
  href: string;
  icon: any;
}

interface SidebarProps {
  navigationLinks: NavigationLink[];
}

function Sidebar({ navigationLinks }: SidebarProps) {
  return (
    <>
      <div className="flex flex-col h-full w-full lg:w-1/4 pl-4 pb-4">
        <h2 className="text-indigo-500 text-2xl font-semibold mb-8">
          Admin Dashboard
        </h2>
        <ul className="space-y-2">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                passHref
                className="block text-white font-semibold text-lg mb-4"
              >
                <FontAwesomeIcon icon={link.icon} className="mr-4" />
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
