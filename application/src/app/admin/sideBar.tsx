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
      <div className="h-full w-64 p-4">
        <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
        <ul className="space-y-2">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                passHref
                className="block px-[2.28rem] lg:p-0 text-white font-semibold text-lg"
              >
                <FontAwesomeIcon icon={link.icon} className="mr-4" />
                {link.text}
              </Link>
            </li>
          ))}
          {/* Add more sidebar links here */}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
