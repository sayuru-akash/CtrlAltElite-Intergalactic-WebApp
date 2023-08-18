import Sidebar from "./sideBar";
import {
  faArrowAltCircleLeft,
  faHome,
  faTicketAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const navigationLinks = [
  { text: "HOME", href: "./dashboard", icon: faHome },
  { text: "RESERVATIONS", href: "./reservations", icon: faTicketAlt },
  { text: "USERS", href: "./users", icon: faUsers },
  { text: "LOGOUT", href: "./logout", icon: faArrowAltCircleLeft },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-stretch w-full px-[1.63rem] py-[1.94rem]">
      <Sidebar navigationLinks={navigationLinks} />
    </div>
  );
}
